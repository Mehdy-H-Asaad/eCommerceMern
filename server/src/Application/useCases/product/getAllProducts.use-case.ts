import { inject, injectable } from "inversify";
import { Product } from "../../../domain/entities/product.entity";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";
import { TCategoryRepository } from "../../../domain/repositories/category/TCategoryRepository";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";

@injectable()
export class GetAllProductsUseCase {
	constructor(
		@inject("TProductRepository") private productRepository: TProductRepository,
		@inject("TCategoryRepository")
		private categoryRepository: TCategoryRepository
	) {}

	async execute(filter?: Record<string, any>): Promise<Product[]> {
		if (filter?.category) {
			const categoryId = await this.categoryRepository.findCategoryById(
				filter.category
			);

			if (!categoryId) {
				throw new ErrorResponse(FAIL, "Category not found", 404);
			}
			filter.category = categoryId;
		}

		return this.productRepository.findAll(filter);
	}
}
