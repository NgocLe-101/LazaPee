import db from '@/database';
import { parse } from 'dotenv';

export const fetchAllCartItems = async (req, res, next) => {
    try {
        const cartFind = await db.models.Cart.findOne({
            where: { userId: req.user.id }
        });
        if(!cartFind) {
            const [cart, created] = await db.models.Cart.findOrCreate({
                where: { userId: userId },
                defaults: { userId: userId }, // Chỉ được sử dụng khi cần tạo
            });
            return res.status(200).json(cart);
        }
        const userId = req.user.id;
        const cart = await db.models.Cart.findOne({
            where: { userId: req.user.id }, 
            attributes: ['id'],
            include: [
                {
                    model: db.models.CartItem,
                    as: 'cartItems',
                    attributes: ['id', 'quantity'],
                    include: [
                        {
                            model: db.models.Skus,
                            as: 'skus',
                            attributes: ['price', 'color', 'size', 'stock_quantity'],
                            include: [
                                {
                                    model: db.models.Product,
                                    as: 'product',
                                    attributes: ['id', 'productName', 'brand', 'description', 'thumbnail'],
                                },
                            ],
                        },
                    ],
                },
            ],
        });

        const result = {
            id: cart.id,
            cartItems: await Promise.all(cart.cartItems.map(async (cartItem) => ({
                cartItemId: cartItem.id,
                productId: cartItem.skus.product.id,
                productName: cartItem.skus.product.productName,
                price: cartItem.skus.price,
                color: cartItem.skus.color,
                size: cartItem.skus.size,
                value: cartItem.skus.value,
                description: cartItem.skus.product.description,
                brand: cartItem.skus.product.brand,
                thumbnail: cartItem.skus.product.thumbnail,
                quantity: cartItem.quantity,
                total: await cartItem.getTotal(),
                discountedTotal: await cartItem.getDiscountedTotal()
            }))),
            total: await cart.getTotal(),
            discountedTotal: await cart.getDiscountedTotal(),
            totalProducts: await cart.getTotalProducts(),
        };
        res.status(200).json(result);

    } catch (err) {
        return next(err)
    }
}

export const addCartItem = async (req, res, next) => {
    try {
        const productId = parseInt(req.body.productId);
        const quantity = parseInt(req.body.quantity);
        const sku = req.body.sku;
        let skus = null;
        if(!sku) {
            skus = await db.models.Skus.findOne({
                where: { productId: productId, color: null, size: null },
            })
        }
        else{
            if(sku.color && sku.size) {
                skus = await db.models.Skus.findOne({
                    where: { productId: productId, color: sku.color, size: sku.size },
                })
            }
            else if(sku.color) {
                skus = await db.models.Skus.findOne({
                    where: { productId: productId, color: sku.color, size: null },
                })
            }
            else if(sku.size) {
                skus = await db.models.Skus.findOne({
                    where: { productId: productId, color: null, size: sku.size },
                })
            }
        }

        const userId = req.user.id

        if (!skus) {
            return res.status(404).json({ code: 404, message: 'Product not found' })
        }
        console.log(skus)
        if (skus.stock_quantity < quantity) {
            return res.status(400).json({ code: 400, message: 'Not enough stock available' })
        }
        const [cart, created] = await db.models.Cart.findOrCreate({
            where: { userId: userId },
            defaults: { userId: userId }, // Chỉ được sử dụng khi cần tạo
        });
        // Kiểm tra xem cart có cartItem nào có productId trùng với req.body.productId không
        const existingCartItem = await db.models.CartItem.findOne({
            where: { cartId: cart.id, skusId: skus.id },
        });
        
        if (existingCartItem) {
            // Nếu đã tồn tại, cập nhật số lượng
            await existingCartItem.update({ quantity: existingCartItem.quantity + quantity });
            return res.status(200).json(existingCartItem);
        } else {
            // Nếu chưa tồn tại, tạo mới
            const [cartItem, created] = await db.models.CartItem.findOrCreate({
                where: { cartId: cart.id, skusId: skus.id },
                defaults: { quantity, price: skus.price },
            });

            res.status(201).json(cartItem);
        }
    } catch (err) {
        next(err);
    }
}

export const updateCartItem = async (req, res, next) => {
    try {
        const cartItemId = parseInt(req.body.cartItemId)
        const quantity = parseInt(req.body.quantity)

        const userId = req.user.id;
       
        const cartItem = await db.models.CartItem.findOne({
            where: { id: cartItemId },
        })

        if (!cartItem) {
            return res.status(404).json({ code: 404, message: 'Cart item not found' })
        }

        const skus = await db.models.Skus.findOne({
            where: { id: cartItem.skusId },
        })

        if (!skus) {
            return res.status(404).json({ code: 404, message: 'Product not found' })
        }

        if (skus.stock_quantity < quantity) {
            return res.status(400).json({ code: 400, message: 'Not enough stock available' })
        }

        await cartItem.update({ quantity });
        const cart = await db.models.Cart.findOne({
            where: { userId: userId },
            include: [
                {
                    model: db.models.CartItem,
                    as: 'cartItems',
                    attributes: ['id', 'quantity'],
                    include: [
                        {
                            model: db.models.Skus,
                            as: 'skus',
                            attributes: ['price', 'color', 'size', 'stock_quantity'],
                        },
                    ],
                },
            ],
        })
        const result = {
            total: await cart.getTotal(),
            discountedTotal: await cart.getDiscountedTotal(),
            totalProducts: await cart.getTotalProducts(),
        };

        return res.status(200).json(result);
    } catch (err) {
        next(err)
    }
}

export const deleteCartItem = async (req, res, next) => {
    try {
        const cartItem = await db.models.CartItem.findOne({
            where: { id: req.params.id },
        });
        console.log(cartItem);
        if (!cartItem) {
            return res.status(404).json({ code: 404, message: 'Cart item not found' })
        }

        await cartItem.destroy();
        const cart = await db.models.Cart.findOne({
            where: { userId: req.user.id },
            include: [
                {
                    model: db.models.CartItem,
                    as: 'cartItems',
                    attributes: ['id', 'quantity'],
                    include: [
                        {
                            model: db.models.Skus,
                            as: 'skus',
                            attributes: ['price', 'color', 'size', 'stock_quantity'],
                        },
                    ],
                },
            ],
        })
        const result = {
            total: await cart.getTotal(),
            discountedTotal: await cart.getDiscountedTotal(),
            totalProducts: await cart.getTotalProducts(),
        };
        return res.status(204).json(result);

    } catch (err) {
        next(err)
    }
}