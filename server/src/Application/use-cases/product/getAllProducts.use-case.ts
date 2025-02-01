import { inject, injectable } from "inversify";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";
import { CategoryRepository } from "../../../Infrastructure/repositories/category/category.repository";
import { TProduct } from "../../../domain/entities/product.entity";

@injectable()
export class GetAllProductsUseCase {
	constructor(
		@inject(ProductRepository) private productRepository: ProductRepository,
		@inject(CategoryRepository)
		private categoryRepository: CategoryRepository
	) {}

	async execute(
		filter?: Record<string, any>,
		limit?: number,
		page?: number
	): Promise<TProduct[]> {
		if (filter?.category) {
			const categoryId = await this.categoryRepository.findCategoryById(
				filter.category
			);

			if (!categoryId) {
				throw new ErrorResponse(FAIL, "Category not found", 404);
			}
			filter.category = categoryId;
		}

		return this.productRepository.findAll(filter, limit, page);
	}
}
