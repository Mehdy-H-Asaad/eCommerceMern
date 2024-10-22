import { Product } from "../../../domain/entities/product.entity";
import { TCreateProductDTO } from "../../DTOs/product/product.dto";

export type TProductService = {
	getAllProducts(filter?: Record<string, any>): Promise<Product[]>;
	createProduct(productData: TCreateProductDTO): Promise<Product>;
	deleteProduct(productId: string): Promise<boolean | null>;
	getSingleProduct(productId: string): Promise<Product | null>;
	getUserProducts(userId: string): Promise<Product[] | null>;
};
