import "reflect-metadata";
import express from "express";
import authRoutes from "./Presentation/routes/auth.route";
import userRoutes from "./Presentation/routes/user.route";
import productRoutes from "./Presentation/routes/product.route";
import categoryRoutes from "./Presentation/routes/category.route";
import cartRoutes from "./Presentation/routes/cart.route";
import orderRoutes from "./Presentation/routes/order.route";
import dotenv from "dotenv";
import connectToMongo from "./config/connectToMongo";
import cookieParser from "cookie-parser";
import { NEXT, REQUEST, RESPONSE } from "./shared/types/server/index";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/user", userRoutes);

app.use((error: any, _req: REQUEST, res: RESPONSE, _next: NEXT) => {
	return res
		.status(error.statusCode || 500)
		.json({ status: error.status, error: error.message });
});

app.listen(process.env.PORT, () => {
	console.log("Listening on port", process.env.PORT);
	connectToMongo();
});
