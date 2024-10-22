import { useCustomQuery } from "@/hooks/useCustomQuery";
import { useSearchParams } from "react-router-dom";
import { getProducts, TProductDTO } from "..";

export const useGetProducts = () => {
	const [searchParams] = useSearchParams();

	const categoryId = searchParams.get("category");
	const productCondition = searchParams.get("status");
	const discount = searchParams.get("discount");

	const {
		data: products,
		refetch: refetchProducts,
		isRefetching: isRefetchingProducts,
		isLoading: isLoadingProducts,
	} = useCustomQuery<TProductDTO[]>(
		["products", categoryId, productCondition],
		() => getProducts(categoryId, productCondition, discount)
	);

	return { products, refetchProducts, isLoadingProducts, isRefetchingProducts };
};
