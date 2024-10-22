import { inject, injectable } from "inversify";
import { TCategoryService } from "../../../Application/types/category/TCategoryService";
import { NEXT, REQUEST, RESPONSE } from "../../../shared/types/server";
import { SUCCESS } from "../../../shared/constants/HTTP/httpStatusCode";
import { catchError } from "../../middlewares/Error/catchError";
import { TCreateCategoryDTO } from "../../../Application/DTOs/category/category.dto";
import ErrorResponse from "../../middlewares/Error/errorResponse";

@injectable()
export class CategoryController {
	constructor(
		@inject("TCategoryService")
		private readonly categoryservice: TCategoryService
	) {}

	getAllCategories = async (
		_req: REQUEST,
		res: RESPONSE,
		next: NEXT
	): Promise<void> => {
		try {
			const categories = await this.categoryservice.getAllCategories();

			res.status(200).json({ status: SUCCESS, data: categories });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return next(catchError(error, next, "getAllCategories"));
		}
	};

	getSingleCategory = async (
		req: REQUEST,
		res: RESPONSE,
		next: NEXT
	): Promise<void> => {
		try {
			const categoryId = req.params.category;

			const category = await this.categoryservice.getSingleCategory(categoryId);

			res.status(200).json({ status: SUCCESS, data: [category] });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "getSingleCategory");
		}
	};

	createCategory = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const category: TCreateCategoryDTO = req.body;

			const createdCategory = await this.categoryservice.createCategory(
				category
			);

			res.status(201).json({ status: SUCCESS, data: [createdCategory] });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "createCategory");
		}
	};
}
