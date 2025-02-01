import { ObjectId } from "mongoose";

export type TCart = {
	_id?: ObjectId | string;
	items: {
		productId: string | ObjectId;
		quantity: number;
		price: number;
		_id?: string | ObjectId;
	}[];
	userId: string | ObjectId;
	createdAt?: Date;
	updatedAt?: Date;
};
