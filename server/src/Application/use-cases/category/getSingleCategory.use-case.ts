import { inject, injectable } from "inversify";
import { CategoryRepository } from "../../../Infrastructure/repositories/category/category.repository";
import { TCategory } from "../../../domain/entities/category.entity";

@injectable()
export class GetSingleCategoryUseCase {
	constructor(
		@inject(CategoryRepository)
		private readonly categoryRepository: CategoryRepository
	) {}

	execute = async (id: string): Promise<TCategory | null> => {
		return this.categoryRepository.findCategoryById(id);
	};
}
