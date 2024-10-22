import { injectable } from "inversify";
import { Product } from "../../../domain/entities/product.entity";
import { TProductRepository } from "../../../domain/repositories/product/TProductRepository";
import ProductModel from "../../database/models/product.model";
import { TCreateProductDTO } from "../../../Application/DTOs/product/product.dto";

@injectable()
export class ProductRepository implements TProductRepository {
	async findAll(filter?: Record<string, any>): Promise<Product[]> {
		const query: Record<string, any> = {};

		if (filter?.category) {
			query.category = filter.category;
		}
		if (filter?.status) {
			query.status = filter.status;
		}

		const products = await ProductModel.find(query)
			.populate({
				path: "user",
				select: "-password",
			})
			.populate({
				path: "category",
			});

		if (filter?.discount) {
			const filteredProducts = products.filter(product =>
				product.variants.some(variant => variant.discount)
			);

			return filteredProducts.map(filteredProduct =>
				filteredProduct.toObject()
			);
		}

		return products.map(product => product.toObject());
	}
	async create(product: TCreateProductDTO): Promise<Product> {
		const newProduct = new ProductModel(product);

		await newProduct.save();

		// return mapToDomainProduct(newProduct);
		return newProduct.toObject();
	}

	async delete(id: string): Promise<boolean | null> {
		const product = await ProductModel.findByIdAndDelete(id);
		if (!product) {
			return null;
		}
		return true;
	}

	findUserProducts = async (id: string): Promise<Product[] | null> => {
		const userProducts = await ProductModel.find({ user: id }).populate({
			path: "user",
			select: "-password",
		});

		if (!userProducts) {
			return null;
		}

		return userProducts.map(userProduct => userProduct.toObject());
	};

	findById = async (id: string): Promise<Product | null> => {
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

		// return mapToDomainProduct(product);
		return product.toObject();
	};
}
