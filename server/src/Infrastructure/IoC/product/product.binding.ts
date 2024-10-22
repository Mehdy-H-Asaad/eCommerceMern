import { ContainerModule } from "inversify";
import { ProductService } from "../../../Application/Services/product/product.service";
import { TProductService } from "../../../Application/types/product/TProductService";
import { CreateProductUseCase } from "../../../Application/useCases/product/createProduct.use-case";
import { DeleteProductUseCase } from "../../../Application/useCases/product/deleteProduct.use-case";
import { GetAllProductsUseCase } from "../../../Application/useCases/product/getAllProducts.use-case";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";
import { ProductController } from "../../../Presentation/controllers/product/product.controller";
import { ProductRepository } from "../../repositories/product/product.repository";
import { GetSingleProductUseCase } from "../../../Application/useCases/product/getSingleProduct.use-case";
import { GetUserProductsUseCase } from "../../../Application/useCases/product/getUserProducts.use-case";

const productBinding = new ContainerModule(bind => {
	// CONTROLLER
	bind<ProductController>(ProductController).toSelf();

	// TYPES
	bind<TProductRepository>("TProductRepository").to(ProductRepository);
	bind<TProductService>("TProductService").to(ProductService);

	// USE CASES
	bind<GetAllProductsUseCase>(GetAllProductsUseCase).toSelf();
	bind<CreateProductUseCase>(CreateProductUseCase).toSelf();
	bind<DeleteProductUseCase>(DeleteProductUseCase).toSelf();
	bind<GetSingleProductUseCase>(GetSingleProductUseCase).toSelf();
	bind<GetUserProductsUseCase>(GetUserProductsUseCase).toSelf();
});

export { productBinding };
