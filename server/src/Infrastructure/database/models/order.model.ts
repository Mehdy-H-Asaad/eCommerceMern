import mongoose, { Schema } from "mongoose";

export enum EOrderStatus {
	PENDING = "Pending",
	COMPLETED = "Completed",
	CANCELLED = "Cancelled",
}

const orderSchema = new Schema(
	{
		buyerId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		sellerId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		productId: {
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
		status: {
			type: String,
			enum: Object.values(EOrderStatus),
			default: EOrderStatus.PENDING,
		},
	},
	{ timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
