import { inject, injectable } from "inversify";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";
import { TCreateProductDTO } from "../../DTOs/product/product.dto";
import { Product } from "../../../domain/entities/product.entity";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";

@injectable()
export class CreateProductUseCase {
	constructor(
		@inject("TProductRepository") private productRepository: TProductRepository
	) {}

	async execute(productData: TCreateProductDTO): Promise<Product> {
		if (
			!productData.productName ||
			!productData.category ||
			!productData.description ||
			!productData.productImage ||
			!productData.variants ||
			!productData.status
		) {
			throw new ErrorResponse(FAIL, "All fields are required", 400);
		}

		if (!productData.user) {
			throw new ErrorResponse(FAIL, "User is not authenticated", 403);
		}

		// const newProduct = new Product(
		// 	productData.productName,
		// 	productData.category.toString(),
		// 	productData.productImages,
		// 	productData.description,
		// 	productData.user.toString(),
		// 	productData.variants,
		// 	productData.status
		// );

		return this.productRepository.create(productData);
	}
}
