// import { inject, injectable } from "inversify";
import { NEXT, REQUEST, RESPONSE } from "../../../shared/types/server";
// import { TProductService } from "../../../Application/types/product/TProductService";
import OrderModel, {
	EOrderStatus,
} from "../../../Infrastructure/database/models/order.model";
import ErrorResponse from "../../middlewares/Error/errorResponse";
import { FAIL, SUCCESS } from "../../../shared/constants/HTTP/httpStatusCode";
import { catchError } from "../../middlewares/Error/catchError";
import UserModel from "../../../Infrastructure/database/models/user.model";
import ProductModel from "../../../Infrastructure/database/models/product.model";

// @injectable()
// export class OrderController {
// 	constructor(
// 		@inject("TProductService") private readonly productService: TProductService
// 	) {}

export const getOrders = async (_req: REQUEST, res: RESPONSE, next: NEXT) => {
	try {
		const orders = await OrderModel.find()
			.populate({
				path: "buyerId",
				select: "userName",
			})
			.populate({
				path: "sellerId",
				select: "userName",
			})
			.populate({
				path: "productId",
				select: "productName productImage",
			});

		return res.status(200).json({ status: SUCCESS, data: orders });
	} catch (error) {
		if (error instanceof ErrorResponse) {
			return next(error);
		}
		return catchError(error, next, "getOrders");
	}
};

export const createOrder = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
	try {
		const { buyerId, productId } = req.body;

		// const product = await this.productService.getSingleProduct(productId);

		const product = await ProductModel.findById(productId);

		if (!product) {
			return next(new ErrorResponse(FAIL, "Product not found", 404));
		}

		const newOrder = new OrderModel({
			buyerId,
			status: EOrderStatus.PENDING,
			sellerId: product.user,
			productId,
		});

		await newOrder.save();

		await UserModel.findByIdAndUpdate(buyerId, {
			$push: { purchases: newOrder._id },
		});
		await UserModel.findByIdAndUpdate(product.user, {
			$push: { sales: newOrder._id },
		});

		res
			.status(201)
			.json({ message: "Order created successfully", order: newOrder });
	} catch (error) {
		if (error instanceof ErrorResponse) {
			return next(error);
		}
		return catchError(error, next, "createOrder");
	}
};

export const updateOrderStatus = async (
	req: REQUEST,
	res: RESPONSE,
	next: NEXT
) => {
	try {
		const { status, orderId } = req.body;

		console.log(orderId);

		const updatedOrder = await OrderModel.findById(orderId);

		if (!updatedOrder) {
			return next(new ErrorResponse(FAIL, "Order not found", 404));
		}

		updatedOrder.status = status;

		await updatedOrder.save();

		return res.status(200).json({ status: SUCCESS, data: [updatedOrder] });
	} catch (error) {
		if (error instanceof ErrorResponse) {
			return next(error);
		}
		return catchError(error, next, "updatedOrderStatus");
	}
};

// }
