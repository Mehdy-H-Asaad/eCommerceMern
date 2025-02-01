import { ContainerModule } from "inversify";
import { ProductService } from "../../../Application/Services/product/product.service";
import { CreateProductUseCase } from "../../../Application/use-cases/product/createProduct.use-case";
import { DeleteProductUseCase } from "../../../Application/use-cases/product/deleteProduct.use-case";
import { GetAllProductsUseCase } from "../../../Application/use-cases/product/getAllProducts.use-case";
import { ProductController } from "../../../Presentation/controllers/product/product.controller";
import { ProductRepository } from "../../repositories/product/product.repository";
import { GetSingleProductUseCase } from "../../../Application/use-cases/product/getSingleProduct.use-case";
import { GetUserProductsUseCase } from "../../../Application/use-cases/product/getUserProducts.use-case";
import { FindProductsByNameUseCase } from "../../../Application/use-cases/product/findProductsByName.use-case";
import { FindPopularProductsUseCase } from "../../../Application/use-cases/product/findPopularProducts.use-case";

const productBinding = new ContainerModule(bind => {
	// CONTROLLER
	bind<ProductController>(ProductController).toSelf();

	// TYPES
	bind<ProductRepository>(ProductRepository).toSelf();
	bind<ProductService>(ProductService).toSelf();

	// USE CASES
	bind<GetAllProductsUseCase>(GetAllProductsUseCase).toSelf();
	bind<CreateProductUseCase>(CreateProductUseCase).toSelf();
	bind<DeleteProductUseCase>(DeleteProductUseCase).toSelf();
	bind<GetSingleProductUseCase>(GetSingleProductUseCase).toSelf();
	bind<GetUserProductsUseCase>(GetUserProductsUseCase).toSelf();
	bind<FindProductsByNameUseCase>(FindProductsByNameUseCase).toSelf();
	bind<FindPopularProductsUseCase>(FindPopularProductsUseCase).toSelf();
});

export { productBinding };
