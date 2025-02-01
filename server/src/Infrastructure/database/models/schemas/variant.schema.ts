import { Schema } from "mongoose";

import { discountSchema } from "../discount.model";
import { stockSchema } from "../stock.model";
import { TDiscount } from "../../../../domain/entities/product.entity";

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
