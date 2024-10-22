import mongoose, { Schema } from "mongoose";
import { TCategoryModel } from "../../../Application/types/category/TCategoryModel";

const categorySchema = new Schema<TCategoryModel>(
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
