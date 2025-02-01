import { inject, injectable } from "inversify";
import { GetAllProductsUseCase } from "../../use-cases/product/getAllProducts.use-case";
import { TCreateProductDTO } from "../../DTOs/product/product.dto";
import { CreateProductUseCase } from "../../use-cases/product/createProduct.use-case";
import { DeleteProductUseCase } from "../../use-cases/product/deleteProduct.use-case";
import { GetSingleProductUseCase } from "../../use-cases/product/getSingleProduct.use-case";
import { GetUserProductsUseCase } from "../../use-cases/product/getUserProducts.use-case";
import { TProduct } from "../../../domain/entities/product.entity";
import { FindPopularProductsUseCase } from "../../use-cases/product/findPopularProducts.use-case";
@injectable()
export class ProductService {
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
		private getUserProductsUseCase: GetUserProductsUseCase,
		@inject(FindPopularProductsUseCase)
		private readonly findPopularProductsUseCase: FindPopularProductsUseCase
	) {}

	getAllProducts = async (
		filter?: Record<string, any>,
		limit?: number,
		page?: number
	): Promise<TProduct[]> => {
		return this.getAllProductsUseCase.execute(filter, limit, page);
	};

	createProduct = async (productData: TCreateProductDTO): Promise<TProduct> => {
		return this.createProductUseCase.execute(productData);
	};

	deleteProduct = async (productId: string): Promise<boolean | null> => {
		return this.deleteProductUseCase.execute(productId);
	};

	getSingleProduct = async (productId: string): Promise<TProduct | null> => {
		return this.getSingleProductUseCase.execute(productId);
	};
	getUserProducts = async (productId: string): Promise<TProduct[] | null> => {
		return this.getUserProductsUseCase.execute(productId);
	};
	findPopularProducts = async (): Promise<TProduct[] | null> => {
		return this.findPopularProductsUseCase.execute();
	};
}
