import { inject, injectable } from "inversify";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";
import { Product } from "../../../domain/entities/product.entity";

@injectable()
export class GetSingleProductUseCase {
	constructor(
		@inject("TProductRepository")
		private readonly productRepositroy: TProductRepository
	) {}

	execute = async (id: string): Promise<Product | null> => {
		return this.productRepositroy.findById(id);
	};
}
