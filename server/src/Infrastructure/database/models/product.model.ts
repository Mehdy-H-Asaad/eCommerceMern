import mongoose, { Schema, Types } from "mongoose";

import { reviewSchema } from "./review.model";
import { variantSchema } from "./schemas/variant.schema";
import { EStatus, TProduct } from "../../../domain/entities/product.entity";

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
		salesCount: {
			type: Number,
			default: 0,
		},
		views: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const ProductModel = mongoose.model<TProduct>("Product", productSchema);

export default ProductModel;
