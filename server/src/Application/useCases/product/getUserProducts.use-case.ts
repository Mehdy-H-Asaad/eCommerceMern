import { inject, injectable } from "inversify";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";

@injectable()
export class GetUserProductsUseCase {
	constructor(
		@inject("TProductRepository")
		private readonly productRepository: TProductRepository
	) {}

	execute = async (id: string) => {
		return this.productRepository.findUserProducts(id);
	};
}
