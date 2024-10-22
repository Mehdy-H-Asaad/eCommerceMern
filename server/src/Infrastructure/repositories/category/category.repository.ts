import { injectable } from "inversify";
import { Category } from "../../../domain/entities/category.entity";
import { TCategoryRepository } from "../../../domain/repositories/category/TCategoryRepository";
import CategoryModel from "../../database/models/category.model";
import { TCreateCategoryDTO } from "../../../Application/DTOs/category/category.dto";

@injectable()
export class CategoryRepository implements TCategoryRepository {
	findAll = async (): Promise<Category[]> => {
		const categories = await CategoryModel.find();

		return categories.map(category => category.toObject());
	};

	findCategoryById = async (id: string): Promise<Category | null> => {
		const category = await CategoryModel.findById(id);

		if (!category) {
			return null;
		}

		return category.toObject();
	};

	createCategory = async (data: TCreateCategoryDTO): Promise<Category> => {
		const createdCategory = new CategoryModel(data);

		await createdCategory.save();

		return createdCategory.toObject();
	};
}
