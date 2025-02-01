import { TProduct } from "../../../Infrastructure/types/product/product-model";

export type TCreateProductDTO = Omit<TProduct, "reviews">;
