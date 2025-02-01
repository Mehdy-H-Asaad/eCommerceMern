import mongoose, { Schema } from "mongoose";
import { TCart } from "../../../domain/entities/cart.entity";

export const cartSchema = new Schema<TCart>(
	{
		items: [
			{
				quantity: {
					type: Number,
					required: true,
				},
				productId: {
					type: mongoose.Types.ObjectId,
					required: true,
					ref: "Product",
				},
				price: {
					type: Number,
					required: true,
				},
			},
		],
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export const CartModel = mongoose.model("Cart", cartSchema);
