import { inject, injectable } from "inversify";
import { TCategoryRepository } from "../../../domain/repositories/category/TCategoryRepository";
import { Category } from "../../../domain/entities/category.entity";

@injectable()
export class GetSingleCategoryUseCase {
	constructor(
		@inject("TCategoryRepository")
		private readonly categoryRepository: TCategoryRepository
	) {}

	execute = async (id: string): Promise<Category | null> => {
		return this.categoryRepository.findCategoryById(id);
	};
}
