import mongoose from "mongoose";
import { ROLES } from "../../shared/types/auth";
export class User {
	constructor(
		public userName: string,
		public fullName: string,
		public password: string,
		public email: string,
		public role: ROLES = ROLES.USER,
		public refreshTokens: string[] = [],
		public likedItems: mongoose.Types.ObjectId[] = [],
		public _id?: string,
		public createdAt?: Date
	) {}
}
