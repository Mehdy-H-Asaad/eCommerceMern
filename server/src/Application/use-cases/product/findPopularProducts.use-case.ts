import { inject, injectable } from "inversify";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";
import { TProduct } from "../../../domain/entities/product.entity";

@injectable()
export class FindPopularProductsUseCase {
	constructor(
		@inject(ProductRepository)
		private readonly productRepository: ProductRepository
	) {}

	execute = async (): Promise<TProduct[] | null> => {
		return this.productRepository.findPopularProducts();
	};
}
