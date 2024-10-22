import { inject, injectable } from "inversify";
import { TCategoryRepository } from "../../../domain/repositories/category/TCategoryRepository";
import { TCreateCategoryDTO } from "../../DTOs/category/category.dto";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { Category } from "../../../domain/entities/category.entity";

@injectable()
export class CreateCategoryUseCase {
	constructor(
		@inject("TCategoryRepository")
		private readonly categoryRepository: TCategoryRepository
	) {}

	execute = async (data: TCreateCategoryDTO): Promise<Category> => {
		if (!data.name) {
			throw new ErrorResponse(FAIL, "Category name is required", 400);
		}

		return this.categoryRepository.createCategory(data);
	};
}
