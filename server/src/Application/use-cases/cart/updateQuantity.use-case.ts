import { inject, injectable } from "inversify";
import { CartRepository } from "../../../Infrastructure/repositories/cart/cart.repository";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { TUpdateQuantityDTO } from "../../DTOs/cart/cart.dto";

@injectable()
export class UpdateQuantityUseCase {
	constructor(
		@inject(CartRepository) private readonly cartRepository: CartRepository
	) {}

	execute = async (data: TUpdateQuantityDTO) => {
		const { productId, quantity, userId } = data;
		if (!userId || !productId || !quantity) {
			throw new ErrorResponse(FAIL, "All fields are required", 400);
		}

		const updatedQuantityCart = await this.cartRepository.updateQuantity(data);

		return updatedQuantityCart;
	};
}
