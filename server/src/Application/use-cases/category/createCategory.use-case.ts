import { inject, injectable } from "inversify";
import { TCreateCategoryDTO } from "../../DTOs/category/category.dto";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { CategoryRepository } from "../../../Infrastructure/repositories/category/category.repository";
import { TCategory } from "../../../domain/entities/category.entity";

@injectable()
export class CreateCategoryUseCase {
	constructor(
		@inject(CategoryRepository)
		private readonly categoryRepository: CategoryRepository
	) {}

	execute = async (data: TCreateCategoryDTO): Promise<TCategory> => {
		if (!data.name) {
			throw new ErrorResponse(FAIL, "Category name is required", 400);
		}

		return this.categoryRepository.createCategory(data);
	};
}
