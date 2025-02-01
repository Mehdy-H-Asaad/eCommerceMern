import { injectable } from "inversify";
import CategoryModel from "../../database/models/category.model";
import { TCreateCategoryDTO } from "../../../Application/DTOs/category/category.dto";
import { TCategory } from "../../../domain/entities/category.entity";

@injectable()
export class CategoryRepository {
	findAll = async (): Promise<TCategory[]> => {
		const categories = await CategoryModel.find();

		return categories.map(category => category.toObject());
	};

	findCategoryById = async (id: string): Promise<TCategory | null> => {
		const category = await CategoryModel.findById(id);

		if (!category) {
			return null;
		}

		return category.toObject();
	};

	createCategory = async (data: TCreateCategoryDTO): Promise<TCategory> => {
		const createdCategory = new CategoryModel(data);

		await createdCategory.save();

		return createdCategory.toObject();
	};
	findCategoryByName = async (
		categoryName: string
	): Promise<TCategory | null> => {
		const category = await CategoryModel.findOne({ name: categoryName });

		if (!category) {
			return null;
		}

		return category;
	};
}
