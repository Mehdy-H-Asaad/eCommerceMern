import { inject, injectable } from "inversify";

import { TCreateCategoryDTO } from "../../DTOs/category/category.dto";
import { GetAllCategoriesUseCase } from "../../use-cases/category/getAllCategories.use-case";
import { CreateCategoryUseCase } from "../../use-cases/category/createCategory.use-case";
import { GetSingleCategoryUseCase } from "../../use-cases/category/getSingleCategory.use-case";
import { TCategory } from "../../../domain/entities/category.entity";
import { FindCategoryByNameUseCase } from "../../use-cases/category/findCategoryByName.use-case";

@injectable()
export class CategoryService {
	constructor(
		@inject(GetAllCategoriesUseCase)
		private readonly getAllCategoriesUseCase: GetAllCategoriesUseCase,
		@inject(GetSingleCategoryUseCase)
		private readonly getSingleCategoryUseCase: GetSingleCategoryUseCase,
		@inject(CreateCategoryUseCase)
		private readonly createCategoryUseCase: CreateCategoryUseCase,
		@inject(FindCategoryByNameUseCase)
		private readonly findCateogryByNameUseCase: FindCategoryByNameUseCase
	) {}

	getAllCategories = async (): Promise<TCategory[]> => {
		return this.getAllCategoriesUseCase.execute();
	};

	getSingleCategory = async (id: string): Promise<TCategory | null> => {
		return this.getSingleCategoryUseCase.execute(id);
	};

	createCategory = (data: TCreateCategoryDTO): Promise<TCategory> => {
		return this.createCategoryUseCase.execute(data);
	};
	findCategoryByName = (categoryName: string): Promise<TCategory | null> => {
		return this.findCateogryByNameUseCase.execute(categoryName);
	};
}
