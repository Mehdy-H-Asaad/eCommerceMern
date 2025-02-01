import { inject, injectable } from "inversify";
import { CategoryRepository } from "../../../Infrastructure/repositories/category/category.repository";
import { TCategory } from "../../../domain/entities/category.entity";

@injectable()
export class FindCategoryByNameUseCase {
	constructor(
		@inject(CategoryRepository)
		private readonly categoryRepository: CategoryRepository
	) {}

	execute = async (cateogryName: string): Promise<TCategory | null> => {
		return this.categoryRepository.findCategoryByName(cateogryName);
	};
}
