import { inject, injectable } from "inversify";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";

@injectable()
export class GetUserProductsUseCase {
	constructor(
		@inject(ProductRepository)
		private readonly productRepository: ProductRepository
	) {}

	execute = async (id: string) => {
		return this.productRepository.findUserProducts(id);
	};
}
