import { useCustomQuery } from "@/hooks/useCustomQuery";
import { TProductDTO } from "../types";
import { getSingleProduct } from "../index";

export const useGetSingleProduct = (id: string) => {
	const { data: singleProductData, isLoading: isLoadingProduct } =
		useCustomQuery<TProductDTO>(["product", id], () => getSingleProduct(id));

	return { singleProductData, isLoadingProduct };
};
