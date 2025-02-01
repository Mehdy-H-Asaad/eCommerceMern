import { ContainerModule } from "inversify";
import { CartController } from "../../../Presentation/controllers/cart/cart.controller";
import { CartService } from "../../../Application/Services/cart/cart.service";
import { CartRepository } from "../../repositories/cart/cart.repository";
import { GetAllCartItemsUseCase } from "../../../Application/use-cases/cart/getAllCartItems.use-case";
import { AddItemToCartUseCase } from "../../../Application/use-cases/cart/addToCart.use-case";
import { RemoveFromCartUseCase } from "../../../Application/use-cases/cart/removeFromCart.use-case";
import { UpdateQuantityUseCase } from "../../../Application/use-cases/cart/updateQuantity.use-case";

export const cartBinding = new ContainerModule(bind => {
	// CONTROLLER
	bind<CartController>(CartController).toSelf();

	// SERVICES
	bind<CartService>(CartService).toSelf();
	// REPOSITORIES
	bind<CartRepository>(CartRepository).toSelf();

	// USE CASES
	bind<GetAllCartItemsUseCase>(GetAllCartItemsUseCase).toSelf();
	bind<AddItemToCartUseCase>(AddItemToCartUseCase).toSelf();
	bind<RemoveFromCartUseCase>(RemoveFromCartUseCase).toSelf();
	bind<UpdateQuantityUseCase>(UpdateQuantityUseCase).toSelf();
});
