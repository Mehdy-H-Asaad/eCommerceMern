import mongoose, { Schema } from "mongoose";
import { ROLES } from "../../../shared/types/auth";
import { TUser } from "../../../Application/types/user/TUserModel";
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
	},
	{ timestamps: true }
);

const UserModel = mongoose.model<TUser>("User", userSchema);

export default UserModel;
