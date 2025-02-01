import { inject, injectable } from "inversify";
// import { Cart } from "../../../domain/entities/cart.entity";
import { GetAllCartItemsUseCase } from "../../use-cases/cart/getAllCartItems.use-case";
import {
	TAddToCartDTO,
	TRemoveFromCartDTO,
	TUpdateQuantityDTO,
} from "../../DTOs/cart/cart.dto";
import { AddItemToCartUseCase } from "../../use-cases/cart/addToCart.use-case";
import { RemoveFromCartUseCase } from "../../use-cases/cart/removeFromCart.use-case";
import { TCart } from "../../../domain/entities/cart.entity";
import { UpdateQuantityUseCase } from "../../use-cases/cart/updateQuantity.use-case";

@injectable()
export class CartService {
	constructor(
		@inject(GetAllCartItemsUseCase)
		private readonly getAllCartItemsUseCase: GetAllCartItemsUseCase,
		@inject(AddItemToCartUseCase)
		private readonly addItemToCartUseCase: AddItemToCartUseCase,
		@inject(RemoveFromCartUseCase)
		private readonly removeFromCartUseCase: RemoveFromCartUseCase,
		@inject(UpdateQuantityUseCase)
		private readonly updateQuantityUseCase: UpdateQuantityUseCase
	) {}

	getAllCartItems = async (userId: string): Promise<TCart | null> => {
		return this.getAllCartItemsUseCase.execute(userId);
	};

	addItemToCart = async (data: TAddToCartDTO): Promise<TCart> => {
		return this.addItemToCartUseCase.execute(data);
	};

	removeFromCart = async (data: TRemoveFromCartDTO): Promise<TCart | null> => {
		return this.removeFromCartUseCase.execute(data);
	};
	updateQuantity = async (data: TUpdateQuantityDTO): Promise<TCart | null> => {
		return this.updateQuantityUseCase.execute(data);
	};
}
