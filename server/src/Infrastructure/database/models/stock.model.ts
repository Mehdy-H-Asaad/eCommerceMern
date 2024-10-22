import { Schema } from "mongoose";
import { TStock } from "./schemas/variant.schema";

export const stockSchema = new Schema<TStock>({
	quantityLeft: { type: Number, required: true },
});
