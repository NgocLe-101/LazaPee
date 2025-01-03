import authRoutes from './auth.route';
import customerCategoryRoutes from './category.route';
import productRoutes from './product.route';
import adminCAuthRoutes from './admin/auth.route';
import adminProductRoutes from './admin/product.route';
import cartRoutes from './cart.route';
import userRoutes from './user.route';
import isAdmin from '@/middlewares/isAdmin';
import adminCategoryRoutes from "./admin/category.route";
import adminVoucherRoutes from "./admin/voucher.route";
import searchRoutes from "./search.route";
import voucherRoutes from './voucher.route';

export default (app) => { 
	app.use("/auth", authRoutes);
	app.use("/products", productRoutes);
	app.use("/cart", cartRoutes);
	app.use("/search", searchRoutes);
  app.use('/user', userRoutes);
	app.use("/voucher", voucherRoutes)

	//router for admin
	app.use('/admin/auth', adminCAuthRoutes);
	app.use('/admin/category', isAdmin, adminCategoryRoutes);
	app.use('/admin/product', isAdmin, adminProductRoutes);
	app.use('/admin/voucher', isAdmin, adminVoucherRoutes);

	app.use('/category', customerCategoryRoutes);
};
