import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getProductsByCategoryService } from "../services/getProductsByCategory.service";

export const useGetProductsByCateogry = (categoryName: string) => {
	const {
		data: productsByCategories,
		isLoading: isLoadingProductsByCategories,
	} = useCustomQuery(["products", categoryName], () =>
		getProductsByCategoryService(categoryName)
	);

	return { productsByCategories, isLoadingProductsByCategories };
};
