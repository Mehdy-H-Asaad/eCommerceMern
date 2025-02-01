import { useCustomQuery } from "@/hooks/useCustomQuery";
import { useSearchParams } from "react-router-dom";
import { TProductDTO } from "../types";
import { getProducts } from "../index";

type TUseGetProducts = {
	selectedCategoryId?: string;
	page?: number;
	limit?: number;
	categoryName?: string;
};
export const useGetProducts = ({
	limit = 10,
	page = 1,
	selectedCategoryId,
	categoryName,
}: TUseGetProducts) => {
	const [searchParams] = useSearchParams();

	const categoryId = searchParams.get("category");
	const status = searchParams.get("status");
	const discount = searchParams.get("discount");
	const maxPrice = Number(searchParams.get("maxPrice"));
	const search = searchParams.get("search");

	// console.log(search);

	const {
		data: products,
		refetch: refetchProducts,
		isRefetching: isRefetchingProducts,
		isLoading: isLoadingProducts,
	} = useCustomQuery<TProductDTO[]>(
		[
			"products",
			categoryId,
			status,
			selectedCategoryId,
			discount,
			maxPrice,
			search,
			categoryName,
		],
		() =>
			getProducts({
				categoryId,
				search,
				status,
				discount,
				limit,
				page,
				maxPrice,
				categoryName,
				selectedCategoryId,
			})
	);

	return { products, refetchProducts, isLoadingProducts, isRefetchingProducts };
};
