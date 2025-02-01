import mongoose, { Schema } from "mongoose";
import { ROLES } from "../../../shared/types/auth";
import { TUser } from "../../../domain/entities/user.entity";

const userSchema = new Schema<TUser>(
	{
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			minlength: 6,
			select: false,
		},
		role: {
			type: String,
			enum: Object.values(ROLES),
			default: ROLES.USER,
		},
		refreshTokens: [String],
		likedItems: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
				default: [],
			},
		],
		purchases: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Order",
				default: [],
			},
		],
		// Track orders as a seller
		sales: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Order",
				default: [],
			},
		],
		address: {
			type: String,
		},
		phoneNumber: {
			type: String,
		},
		profileImg: {
			type: String,
		},
	},
	{ timestamps: true }
);

const UserModel = mongoose.model<TUser>("User", userSchema);

export default UserModel;
