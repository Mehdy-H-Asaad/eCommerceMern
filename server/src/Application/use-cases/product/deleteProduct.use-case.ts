import { inject, injectable } from "inversify";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";

@injectable()
export class DeleteProductUseCase {
	constructor(
		@inject(ProductRepository) private productRepository: ProductRepository
	) {}

	execute = async (id: string): Promise<boolean | null> => {
		return this.productRepository.delete(id);
	};
}
