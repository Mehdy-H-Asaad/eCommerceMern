import mongoose, { Schema, Types } from "mongoose";
import {
	EStatus,
	TProduct,
} from "../../../Application/types/product/TProductModel";
import { reviewSchema } from "./review.model";
import { variantSchema } from "./schemas/variant.schema";

const productSchema = new Schema<TProduct>(
	{
		productName: {
			type: String,
			required: true,
		},
		category: {
			type: Types.ObjectId,
			ref: "Category",
			required: true,
		},
		productImage: {
			type: String,
			required: true,
			default: "",
		},
		description: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		variants: [
			{
				type: variantSchema,
				required: true,
			},
		],
		// attributes: {
		// 	type: mongoose.Schema.Types.Mixed,
		// 	required: true,
		// 	default: {},
		// },
		// stock: {
		// 	type: stockSchema,
		// 	required: true,
		// },

		status: {
			type: String,
			required: true,
			enum: EStatus,
		},

		reviews: [
			{
				type: reviewSchema,
			},
		],
	},
	{ timestamps: true }
);

const ProductModel = mongoose.model<TProduct>("Product", productSchema);

export default ProductModel;
