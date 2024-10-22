import { Category } from "../../../domain/entities/category.entity";
import { TCreateCategoryDTO } from "../../DTOs/category/category.dto";

export type TCategoryService = {
	getAllCategories(): Promise<Category[]>;
	getSingleCategory(id: string): Promise<Category | null>;
	createCategory(data: TCreateCategoryDTO): Promise<Category>;
};
