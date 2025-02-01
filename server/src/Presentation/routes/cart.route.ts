import express from "express";
import container from "../../Infrastructure/IoC/container";
import { CartController } from "../controllers/cart/cart.controller";
import { verifyJwt } from "../middlewares/verifyJwt";

const router = express.Router();

const cartController = container.get<CartController>(CartController);

router.route("/").get(verifyJwt, cartController.getAllCartItems);
router
	.route("/delete-item/:productId")
	.delete(verifyJwt, cartController.removeFromCart);
router
	.route("/add-item/:productId")
	.post(verifyJwt, cartController.addItemToCart);
router
	.route("/update-quantity/:productId")
	.put(verifyJwt, cartController.updateQuantity);
export default router;
