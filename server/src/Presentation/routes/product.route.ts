import express from "express";
import { ProductController } from "../controllers/product/product.controller";
import container from "../../Infrastructure/IoC/container";
import { verifyJwt } from "../middlewares/verifyJwt";
// import { verifyRoles } from "../middlewares/verifyRoles";
// import { ROLES } from "../../shared/types/auth";

const router = express.Router();

const productController = container.get<ProductController>(ProductController);

router
	.route("/")
	.get(productController.getProducts)
	.post(verifyJwt, productController.createProduct);

router.route("/popular-products").get(productController.getPopularProducts);

router.route("/:categoryName").get(productController.getProducts);

router
	.route("/single-product/:id")
	.delete(productController.deleteProduct)
	.get(productController.getSingleProduct);

router
	.route("/user-products/:id")
	.get(verifyJwt, productController.getUserProducts);

export default router;
