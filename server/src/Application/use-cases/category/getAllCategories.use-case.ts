import { inject, injectable } from "inversify";
import { CategoryRepository } from "../../../Infrastructure/repositories/category/category.repository";
import { TCategory } from "../../../domain/entities/category.entity";

@injectable()
export class GetAllCategoriesUseCase {
	constructor(
		@inject(CategoryRepository)
		private readonly categoryRepository: CategoryRepository
	) {}

	execute = async (): Promise<TCategory[]> => {
		return this.categoryRepository.findAll();
	};
}
