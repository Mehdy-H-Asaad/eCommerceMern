import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getSingleProduct, TProductDTO } from "..";

export const useGetSingleProduct = (id: string) => {
	const { data: singleProductData, isLoading: isLoadingProduct } =
		useCustomQuery<TProductDTO>(["product", id], () => getSingleProduct(id));

	return { singleProductData, isLoadingProduct };
};
