import mongoose, { Schema } from "mongoose";

export const priceSchema = new Schema({
	price: { type: Number, required: true },
});

const PriceModel = mongoose.model("Price", priceSchema);

export default PriceModel;
