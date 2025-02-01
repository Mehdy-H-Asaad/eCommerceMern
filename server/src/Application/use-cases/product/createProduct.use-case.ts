import { inject, injectable } from "inversify";
import { TCreateProductDTO } from "../../DTOs/product/product.dto";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { ProductRepository } from "../../../Infrastructure/repositories/product/product.repository";
import { TProduct } from "../../../domain/entities/product.entity";

@injectable()
export class CreateProductUseCase {
	constructor(
		@inject(ProductRepository) private productRepository: ProductRepository
	) {}

	async execute(productData: TCreateProductDTO): Promise<TProduct> {
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

		return this.productRepository.create({
			...productData,
			productName: productData.productName.trim(),
		});
	}
}
