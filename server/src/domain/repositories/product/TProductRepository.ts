import { TCreateProductDTO } from "../../../Application/DTOs/product/product.dto";
import { Product } from "../../entities/product.entity";
export type TProductRepository = {
	findAll(filter?: Record<string, any>): Promise<Product[]>;
	create(product: TCreateProductDTO): Promise<Product>;
	delete(id: string): Promise<boolean | null>;
	findById(id: string): Promise<Product | null>;
	findUserProducts(id: string): Promise<Product[] | null>;
};
