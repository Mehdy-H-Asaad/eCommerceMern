import { inject, injectable } from "inversify";
import { TCategoryService } from "../../types/category/TCategoryService";
import { GetAllCategoriesUseCase } from "../../useCases/category/getAllCategories.use-case";
import { Category } from "../../../domain/entities/category.entity";
import { GetSingleCategoryUseCase } from "../../useCases/category/getSingleCategory.use-case";
import { CreateCategoryUseCase } from "../../useCases/category/createCategory.use-case";
import { TCreateCategoryDTO } from "../../DTOs/category/category.dto";

@injectable()
export class CategoryService implements TCategoryService {
	constructor(
		@inject(GetAllCategoriesUseCase)
		private readonly getAllCategoriesUseCase: GetAllCategoriesUseCase,
		@inject(GetSingleCategoryUseCase)
		private readonly getSingleCategoryUseCase: GetSingleCategoryUseCase,
		@inject(CreateCategoryUseCase)
		private readonly createCategoryUseCase: CreateCategoryUseCase
	) {}

	getAllCategories = async (): Promise<Category[]> => {
		return this.getAllCategoriesUseCase.execute();
	};

	getSingleCategory = async (id: string): Promise<Category | null> => {
		return this.getSingleCategoryUseCase.execute(id);
	};

	createCategory = (data: TCreateCategoryDTO): Promise<Category> => {
		return this.createCategoryUseCase.execute(data);
	};
}
