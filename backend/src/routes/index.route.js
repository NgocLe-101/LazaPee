import authRoutes from "./auth.route";
import customerCategoryRoutes from './category.route'
import adminCategoryRoutes from "./admin/category.route";
import adminCAuthRoutes from "./admin/auth.route";
import adminProductRoutes from "./admin/product.route";
import productRoutes from "./product.route";
import cartRoutes from "./cart.route";
import searchRoutes from "./search.route";
import shopShipmentRoutes from "./shipment.route";

export default (app) => { 
	app.use("/auth", authRoutes);
	app.use("/products", productRoutes);
	app.use("/cart", cartRoutes);
	app.use("/search", searchRoutes);

	//router for shop
	app.use("/shop/shipment",shopShipmentRoutes);

	//router for admin
	app.use("/admin/auth", adminCAuthRoutes);
	app.use("/admin/category", adminCategoryRoutes);
	app.use("/admin/product", adminProductRoutes);

	app.use("/category", customerCategoryRoutes);
}
