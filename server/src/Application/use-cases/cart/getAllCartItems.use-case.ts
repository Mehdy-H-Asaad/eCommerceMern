import { inject, injectable } from "inversify";
import { CartRepository } from "../../../Infrastructure/repositories/cart/cart.repository";
@injectable()
export class GetAllCartItemsUseCase {
	constructor(
		@inject(CartRepository) private readonly cartRepository: CartRepository
	) {}

	execute = async (userId: string) => {
		return this.cartRepository.getAllCartItems(userId);
	};
}
