import { ObjectId } from "mongoose";
import { TVarinatSchema } from "../../../Infrastructure/database/models/schemas/variant.schema";

export type TStock = {
	quantityLeft: number;
};

export type TReview = {
	reviewerName: string;
	rating: number;
};

export type TDiscount = {
	percentage: number;
	validFrom?: Date;
	validUntil?: Date;
};

export enum EStatus {
	NEW = "new",
	USED = "used",
}

export type TProduct = {
	_id?: ObjectId;
	productName: string;
	category: ObjectId;
	productImage: string;
	description: string;
	user: ObjectId;
	variants: TVarinatSchema[];
	reviews: TReview[];
	status: EStatus;
};
