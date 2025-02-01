import { inject, injectable } from "inversify";
import { CartRepository } from "../../../Infrastructure/repositories/cart/cart.repository";
import { TAddToCartDTO } from "../../DTOs/cart/cart.dto";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { CartModel } from "../../../Infrastructure/database/models/cart.model";
import { TCart } from "../../../domain/entities/cart.entity";

@injectable()
export class AddItemToCartUseCase {
	constructor(
		@inject(CartRepository) private readonly cartRepository: CartRepository
	) {}

	execute = async (data: TAddToCartDTO): Promise<TCart> => {
		const { userId, quantity, productId, price } = data;

		if (!productId || !quantity || !userId || !price) {
			throw new ErrorResponse(FAIL, "All fields are required", 400);
		}

		let cart = await this.cartRepository.findCartByUser(data.userId);

		if (!cart) {
			cart = new CartModel([{ productId, quantity, price }], userId);
		} else {
			const exisitingItem = cart.items.find(
				item => item.productId.toString() == productId
			);

			if (exisitingItem) {
				exisitingItem.quantity = quantity;
			} else {
				cart.items.push({ productId: productId, quantity, price });
			}
		}

		return this.cartRepository.save(cart);
	};
}
