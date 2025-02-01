import { inject, injectable } from "inversify";
import { NEXT, REQUEST, RESPONSE } from "../../../shared/types/server";
import ErrorResponse from "../../middlewares/Error/errorResponse";
import { catchError } from "../../middlewares/Error/catchError";
import { FAIL, SUCCESS } from "../../../shared/constants/HTTP/httpStatusCode";
import { CartService } from "../../../Application/Services/cart/cart.service";

@injectable()
export class CartController {
	constructor(@inject(CartService) private readonly cartService: CartService) {}

	getAllCartItems = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const userId = req.user;

			if (!userId) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}

			const cartItems = await this.cartService.getAllCartItems(userId);

			return res.status(200).json({ status: SUCCESS, data: cartItems });
		} catch (error) {
			if (error instanceof ErrorResponse) return next(error);

			return catchError(error, next, "getAllCartItems");
		}
	};

	addItemToCart = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const userId = req.user;

			const { productId } = req.params;

			const { quantity, price } = req.body;

			if (!userId) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}

			const newItem = await this.cartService.addItemToCart({
				productId,
				userId,
				quantity,
				price,
			});

			return res.status(201).json({ status: SUCCESS, data: newItem });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "addItemToCart");
		}
	};

	removeFromCart = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const userId = req.user;
			const { productId } = req.params;

			if (!userId) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}
			await this.cartService.removeFromCart({ userId, productId });

			return res
				.status(200)
				.json({ status: SUCCESS, data: "Item deleted successfully" });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}

			return catchError(error, next, "removeFromCart");
		}
	};

	updateQuantity = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const userId = req.user;
			const { productId } = req.params;
			const { quantity } = req.body;

			console.log("Quan", quantity);

			if (!userId) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}

			console.log(`//// ${userId} "" ${quantity} "" ${productId}`);

			const updatedCart = await this.cartService.updateQuantity({
				userId,
				productId,
				quantity,
			});

			return res.status(200).json({ status: SUCCESS, data: updatedCart });
		} catch (error: any) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "updateQuantity");
		}
	};
}
