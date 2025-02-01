import { inject, injectable } from "inversify";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";
import { TProduct } from "../../../domain/entities/product.entity";

@injectable()
export class GetSingleProductUseCase {
	constructor(
		@inject(ProductRepository)
		private readonly productRepositroy: ProductRepository
	) {}

	execute = async (id: string): Promise<TProduct | null> => {
		return this.productRepositroy.findById(id);
	};
}
