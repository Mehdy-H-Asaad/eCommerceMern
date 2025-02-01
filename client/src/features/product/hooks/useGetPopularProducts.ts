import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getPopularProductsService } from "../services/getPopularProducts.service";

export const useGetPopularProducts = () => {
	const { data: popularProducts, isLoading: isLoadingPopualrProducts } =
		useCustomQuery(["popularProducts"], getPopularProductsService);
	return { popularProducts, isLoadingPopualrProducts };
};
