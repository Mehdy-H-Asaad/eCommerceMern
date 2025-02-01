import mongoose, { Schema } from "mongoose";
import { TCategory } from "../../../domain/entities/category.entity";

const categorySchema = new Schema<TCategory>(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
