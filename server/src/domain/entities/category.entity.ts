import { ObjectId } from "mongoose";

export type TCategory = {
	_id: string | ObjectId;
	name: string;
};
