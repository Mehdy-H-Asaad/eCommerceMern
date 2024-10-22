import { inject, injectable } from "inversify";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";

@injectable()
export class DeleteProductUseCase {
	constructor(
		@inject("TProductRepository") private productRepository: TProductRepository
	) {}

	execute = async (id: string): Promise<boolean | null> => {
		return this.productRepository.delete(id);
	};
}
