import {
	EStatus,
	TReview,
} from "../../Application/types/product/TProductModel";
import { TVarinatSchema } from "../../Infrastructure/database/models/schemas/variant.schema";

export class Product {
	constructor(
		public productName: string,
		public category: string,
		public productImage: string,
		public description: string,
		public user: string,
		public variants: TVarinatSchema[],
		public status: EStatus,
		public reviews: TReview[] = [],
		public _id?: string // public stock: TStock, // public discount: TDiscount
	) {}
}
