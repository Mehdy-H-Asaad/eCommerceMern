import { Schema } from "mongoose";
import { TDiscount } from "../../../../Application/types/product/TProductModel";
import { discountSchema } from "../discount.model";
import { stockSchema } from "../stock.model";

export type TStock = {
	quantityLeft: Number;
};

export type TVarinatSchema = {
	size: string;
	colors: string[];
	stock: TStock;
	price: number;
	discount?: TDiscount;
};

export const variantSchema = new Schema<TVarinatSchema>({
	size: { type: String, required: false },
	colors: { type: [String], required: false },
	price: { required: true, type: Number },
	stock: {
		type: stockSchema,
		required: true,
	},
	discount: {
		type: discountSchema,
		required: false,
	},
});
