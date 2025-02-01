import { inject, injectable } from "inversify";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";
import { TProduct } from "../../../domain/entities/product.entity";

@injectable()
export class FindProductsByNameUseCase {
	constructor(
		@inject(ProductRepository)
		private readonly productRepository: ProductRepository
	) {}

	execute = async (name: string): Promise<TProduct[] | null> => {
		return this.productRepository.findProductsByName(name);
	};
}
