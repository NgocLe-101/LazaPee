import db from '@/database';
import Fuse from 'fuse.js';

export const searchProducts = async (req, res, next) => {
    try {
        const { keyword, maxPrice, minPrice, color, size, brands, order } = req.query;
        const page = parseInt(req.query.page) || 0;

        if (!keyword) {
            return res.status(400).json({ code: 400, message: 'Keyword is required' });
        }

        const limit = 10; // Số lượng sản phẩm trên mỗi trang
        const offset = page ? page * limit : 0;

        // Lấy toàn bộ sản phẩm từ cơ sở dữ liệu trước
        const products = await db.models.Product.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'slug', 'categoryId'] },
            include: [
                {
                    model: db.models.Skus,
                    as: 'skus',
                },
            ],
        });

        // Cấu hình Fuse.js
        const options = {
            keys: ['productName'], 
            threshold: 0.3, // Độ chính xác tìm kiếm (0 = chính xác tuyệt đối, 1 = chấp nhận sai nhiều)
            includeScore: true, // Bao gồm điểm số của từng kết quả
        };

        const fuse = new Fuse(products, options);

        // Thực hiện tìm kiếm với từ khóa
        let result = fuse.search(keyword).map(({ item }) => item);

        // Áp dụng các bộ lọc khác nếu có (maxPrice, minPrice, color, size, brands)
        if (maxPrice && minPrice) {
            result = result.filter((product) =>
                product.skus.some((sku) => sku.price <= parseFloat(maxPrice) && sku.price >= parseFloat(minPrice))
            );
        }
        else if (maxPrice) {
            result = result.filter((product) =>
                product.skus.some((sku) => sku.price <= parseFloat(maxPrice))
            );
        }
        else if (minPrice) {
            result = result.filter((product) =>
                product.skus.some((sku) => sku.price >= parseFloat(minPrice))
            );
        }

        if (brands) {
            const brandArray = brands.split(',');
            result = result.filter((product) => brandArray.includes(product.brand));
        }

        if (color || size) {
            result = result.filter((product) =>
                product.skus.some(
                    (sku) =>
                        (!color || sku.color === color) &&
                        (!size || sku.size === size)
                )
            );
        }

        if (order) {
            if (order === 'asc') {
                result = result.sort((a, b) => a.skus[0].price - b.skus[0].price);
            } else if (order === 'desc') {
                result = result.sort((a, b) => b.skus[0].price - a.skus[0].price);
            }
        }

        result = result.map((product) => ({
            id: product.id,
            productName: product.productName,
            brand: product.brand,
            description: product.description,
            thumbnail: product.thumbnail,
            price: product.skus.length > 0 ? product.skus[0].price : null,
            images: product.images,
        }));

        // Tính tổng số kết quả
        const totalResults = result.length;
        const totalPages = Math.ceil(totalResults / limit);

        // Phân trang kết quả
        const paginatedResult = result.slice(offset, offset + limit);

        if (paginatedResult.length > 0) {
            return res.status(200).json({
                code: 200,
                data: paginatedResult,
                pagination: {
                    totalResults,
                    totalPages,
                    currentPage: page,
                    limit,
                },
        })}
        else {
            return res.status(404).json({ code: 404, message: 'No products found, please use more specific keyword!.' });
        }
    } catch (err) {
        return next(err);
    }
};
