import mongoose from "mongoose";
import { ROLES } from "../../../shared/types/auth";

export type TUser = {
	_id: mongoose.Types.ObjectId;
	userName: string;
	fullName: string;
	email: string;
	password: string;
	role?: ROLES;
	refreshTokens: string[];
	likedItems?: mongoose.Types.ObjectId[];
	createdAt?: Date;
};
