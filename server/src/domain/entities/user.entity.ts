import { ObjectId } from "mongoose";
import { ROLES } from "../../shared/types/auth";

export type TUser = {
	_id: ObjectId | string;
	userName: string;
	fullName: string;
	email: string;
	password: string;
	role?: ROLES;
	refreshTokens: string[];
	likedItems?: ObjectId[] | string[];
	purchases: ObjectId[] | string[];
	sales: ObjectId[] | string[];
	createdAt?: Date;
	phoneNumber?: string;
	address?: string;
	profileImg?: string;
};
