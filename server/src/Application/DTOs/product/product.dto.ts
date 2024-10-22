import { TProduct } from "../../types/product/TProductModel";

export type TCreateProductDTO = Omit<TProduct, "reviews">;
