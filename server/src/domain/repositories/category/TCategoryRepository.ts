import { TCreateCategoryDTO } from "../../../Application/DTOs/category/category.dto";
import { Category } from "../../entities/category.entity";

export type TCategoryRepository = {
	findAll(): Promise<Category[]>;
	findCategoryById(id: string): Promise<Category | null>;
	createCategory(data: TCreateCategoryDTO): Promise<Category>;
};
