import { Schema } from "mongoose";
import { TProduct } from "../../../../Application/types/product/TProductModel";
import { Product } from "../../../../domain/entities/product.entity";

export const mapToQueryProduct = (product: Product): TProduct => {
	return {
		_id: product._id ? new Schema.Types.ObjectId(product._id) : undefined,
		category: new Schema.Types.ObjectId(product.category),
		description: product.description,
		productImages: product.productImages,
		productName: product.productName,
		reviews: product.reviews,
		status: product.status,
		user: new Schema.Types.ObjectId(product.user),
		variants: product.variants,
	};
};
