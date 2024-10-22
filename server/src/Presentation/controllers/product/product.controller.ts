import { NextFunction } from "express";
import { TProductService } from "../../../Application/types/product/TProductService";
import { NEXT, REQUEST, RESPONSE } from "../../../shared/types/server";
import { catchError } from "../../middlewares/Error/catchError";
import { inject, injectable } from "inversify";
import { FAIL, SUCCESS } from "../../../shared/constants/HTTP/httpStatusCode";
import ErrorResponse from "../../middlewares/Error/errorResponse";
import { TCreateProductDTO } from "../../../Application/DTOs/product/product.dto";
import { v2 as cloudinary } from "cloudinary";
import { TUserService } from "../../../Application/types/user/TUserService";
@injectable()
export class ProductController {
	constructor(
		@inject("TProductService") private productService: TProductService,
		@inject("TUserService") private readonly userService: TUserService
	) {}

	getProducts = async (
		req: REQUEST,
		res: RESPONSE,
		next: NextFunction
	): Promise<void> => {
		try {
			const { category, status, discount, price } = req.query;

			const products = await this.productService.getAllProducts({
				category,
				status,
				discount,
				price,
			});

			res.status(200).json({ status: SUCCESS, data: products });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "getProdcts");
		}
	};

	createProduct = async (
		req: REQUEST,
		res: RESPONSE,
		next: NextFunction
	): Promise<void> => {
		try {
			const userId = req.user;
			let { productImage } = req.body;

			// const uploadedImages: string[] = [];

			if (productImage) {
				const uploadingResponse = await cloudinary.uploader.upload(
					productImage
				);
				productImage = uploadingResponse.secure_url;
			}
			const productData: TCreateProductDTO = {
				...req.body,
				user: userId,
				productImage: productImage,
			};

			const createdProduct = await this.productService.createProduct(
				productData
			);

			res.status(201).json({ status: SUCCESS, data: [createdProduct] });
		} catch (error) {
			if (error instanceof ErrorResponse) return next(error);

			return catchError(error, next, "createProduct");
		}
	};

	deleteProduct = async (
		req: REQUEST,
		res: RESPONSE,
		next: NextFunction
	): Promise<void> => {
		try {
			const productId = req.params.id;

			const deletedProduct = await this.productService.deleteProduct(productId);

			if (!deletedProduct) {
				return next(new ErrorResponse(FAIL, "Product not found", 404));
			}
			res
				.status(200)
				.json({ status: SUCCESS, data: "Product deleted successfully" });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "deleteProduct");
		}
	};

	getSingleProduct = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const { id } = req.params;

			const product = await this.productService.getSingleProduct(id);

			res.status(200).json({ status: SUCCESS, data: [product] });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				next(error);
			}
			return catchError(error, next, "getSingleProduct");
		}
	};

	getUserProducts = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const { id } = req.params;

			const user = await this.userService.findUser(id);

			if (!user) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}
			const userProducts = await this.productService.getUserProducts(id);

			return res.status(200).json({ status: SUCCESS, data: userProducts });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "getUserProduct");
		}
	};
}
