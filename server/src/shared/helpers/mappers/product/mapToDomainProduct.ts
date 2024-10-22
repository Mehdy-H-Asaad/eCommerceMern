import { TProduct } from "../../../../Application/types/product/TProductModel";
import { Product } from "../../../../domain/entities/product.entity";

export const mapToDomainProduct = (productModel: TProduct) => {
	return new Product(
		productModel.productName,
		productModel.category.toString(),
		productModel.productImages,
		productModel.description,
		productModel.user.toString(),
		productModel.variants,
		productModel.status,
		productModel.reviews,
		productModel._id && productModel._id.toString()
	);
};
