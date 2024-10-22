import { inject, injectable } from "inversify";
import { TCategoryRepository } from "../../../domain/repositories/category/TCategoryRepository";
import { Category } from "../../../domain/entities/category.entity";

@injectable()
export class GetAllCategoriesUseCase {
	constructor(
		@inject("TCategoryRepository")
		private readonly categoryRepository: TCategoryRepository
	) {}

	execute = async (): Promise<Category[]> => {
		return this.categoryRepository.findAll();
	};
}
