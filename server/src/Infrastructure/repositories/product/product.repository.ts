import { injectable } from "inversify";
import ProductModel from "../../database/models/product.model";
import { TCreateProductDTO } from "../../../Application/DTOs/product/product.dto";
import { TProduct } from "../../../domain/entities/product.entity";

type TProductFilter = {
	category?: string;
	status?: string;
	discount?: boolean;
	maxPrice?: boolean;
	search?: string;
	categoryName?: string;
};
@injectable()
export class ProductRepository {
	async findAll(
		filter: TProductFilter = {},
		limit?: number,
		page?: number
	): Promise<TProduct[]> {
		const query: Record<string, any> = {};
		const sanitizedPage = Math.max(1, Math.floor(Number(page)));
		const sanitizedLimit = Math.max(1, Math.floor(Number(limit)));
		const skip = (sanitizedPage - 1) * sanitizedLimit;

		// const total = await ProductModel.countDocuments();

		if (filter.category) {
			query.category = filter.category;
		}
		if (filter.status) {
			query.status = filter.status;
		}
		if (filter.discount) {
			query["variants.discount.percentage"] = { $gt: 0 };
		}
		if (filter.maxPrice)
			query["variants.price"] = { $gt: 0, $lt: filter.maxPrice };

		if (filter.categoryName) {
			query.category = filter.categoryName;

			console.log(query);
		}
		if (filter.search) {
			const searchWords = filter.search.split(" ");
			query.$or = searchWords.map(word => ({
				productName: { $regex: new RegExp(word, "i") },
			}));
		}

		// const test = await ProductModel.find({ category });

		// console.log(test);

		const products = await ProductModel.find(query)
			.populate({
				path: "user",
				select: "-password",
			})
			.populate({
				path: "category",
			})
			.limit(sanitizedLimit)
			.skip(skip);

		return products.map(product => product.toObject());
	}

	findPopularProducts = async (): Promise<TProduct[] | null> => {
		const popularProducts = await ProductModel.find()
			.sort({ salesCount: -1 })
			.limit(8);

		return popularProducts;
	};

	async create(product: TCreateProductDTO): Promise<TProduct> {
		const newProduct = new ProductModel(product);

		await newProduct.save();

		return newProduct.toObject();
	}

	async delete(id: string): Promise<boolean | null> {
		const product = await ProductModel.findByIdAndDelete(id);
		if (!product) {
			return null;
		}
		return true;
	}

	findUserProducts = async (id: string): Promise<TProduct[] | null> => {
		const userProducts = await ProductModel.find({ user: id }).populate({
			path: "user",
			select: "-password",
		});

		if (!userProducts) {
			return null;
		}

		return userProducts.map(userProduct => userProduct.toObject());
	};

	findById = async (id: string): Promise<TProduct | null> => {
		const product = await ProductModel.findById(id)
			.populate({
				path: "user",
				select: "userName",
			})
			.populate({
				path: "category",
				select: "name",
			});

		if (!product) {
			return null;
		}

		return product.toObject();
	};
	findProductsByName = async (name: string): Promise<TProduct[] | null> => {
		const searchedProducts = await ProductModel.find({
			productName: { $regex: new RegExp(name, "i") },
		});

		return searchedProducts.map(product => product.toObject());
	};
}
