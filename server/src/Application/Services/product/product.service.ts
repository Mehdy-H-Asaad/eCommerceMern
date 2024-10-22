import { inject, injectable } from "inversify";
import { Product } from "../../../domain/entities/product.entity";
import { TProductService } from "../../types/product/TProductService";
import { GetAllProductsUseCase } from "../../useCases/product/getAllProducts.use-case";
import { TCreateProductDTO } from "../../DTOs/product/product.dto";
import { CreateProductUseCase } from "../../useCases/product/createProduct.use-case";
import { DeleteProductUseCase } from "../../useCases/product/deleteProduct.use-case";
import { GetSingleProductUseCase } from "../../useCases/product/getSingleProduct.use-case";
import { GetUserProductsUseCase } from "../../useCases/product/getUserProducts.use-case";

@injectable()
export class ProductService implements TProductService {
	constructor(
		@inject(GetAllProductsUseCase)
		private getAllProductsUseCase: GetAllProductsUseCase,
		@inject(CreateProductUseCase)
		private createProductUseCase: CreateProductUseCase,
		@inject(DeleteProductUseCase)
		private deleteProductUseCase: DeleteProductUseCase,
		@inject(GetSingleProductUseCase)
		private getSingleProductUseCase: GetSingleProductUseCase,
		@inject(GetUserProductsUseCase)
		private getUserProductsUseCase: GetUserProductsUseCase
	) {}

	getAllProducts = async (filter?: Record<string, any>): Promise<Product[]> => {
		return this.getAllProductsUseCase.execute(filter);
	};

	createProduct = async (productData: TCreateProductDTO): Promise<Product> => {
		return this.createProductUseCase.execute(productData);
	};

	deleteProduct = async (productId: string): Promise<boolean | null> => {
		return this.deleteProductUseCase.execute(productId);
	};

	getSingleProduct = async (productId: string): Promise<Product | null> => {
		return this.getSingleProductUseCase.execute(productId);
	};
	getUserProducts = async (productId: string): Promise<Product[] | null> => {
		return this.getUserProductsUseCase.execute(productId);
	};
}
