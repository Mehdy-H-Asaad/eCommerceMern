import { Schema } from "mongoose";

export const discountSchema = new Schema({
	percentage: { type: Number, required: true },
	validFrom: { type: Date, required: false },
	validUntil: { type: Date, required: false },
});

// const DiscountModel = mongoose.model("Discount", discountSchema);

// export default DiscountModel;
