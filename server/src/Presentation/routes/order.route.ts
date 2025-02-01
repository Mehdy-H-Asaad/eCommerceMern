import express from "express";
import {
	createOrder,
	getOrders,
	updateOrderStatus,
	// OrderController,
} from "../controllers/order/order.controller";

const router = express.Router();

router.route("/").get(getOrders);
router.route("/create-order").post(createOrder);
router.route("/update-order").put(updateOrderStatus);
export default router;
