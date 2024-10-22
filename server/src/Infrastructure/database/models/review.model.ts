import mongoose, { Schema } from "mongoose";

export const reviewSchema = new Schema(
	{
		reviewerName: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5,
		},
	},
	{ timestamps: true }
);

// const ReviewModel = mongoose.model("Review", reviewSchema);

// export default ReviewModel;
