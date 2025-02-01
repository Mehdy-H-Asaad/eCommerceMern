import { inject, injectable } from "inversify";
import { CartRepository } from "../../../Infrastructure/repositories/cart/cart.repository";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { TRemoveFromCartDTO } from "../../DTOs/cart/cart.dto";

@injectable()
export class RemoveFromCartUseCase {
	constructor(
		@inject(CartRepository) private readonly cartRepository: CartRepository
	) {}

	execute = async (data: TRemoveFromCartDTO) => {
		const { productId, userId } = data;

		const cart = await this.cartRepository.findCartByUser(userId);

		if (!cart) {
			throw new ErrorResponse(FAIL, "Cart not found", 404);
		}

		console.log("BEFORE", cart.items[0].productId);

		cart.items = cart.items.filter(product => product.productId != productId);

		return this.cartRepository.save(cart);
	};
}
