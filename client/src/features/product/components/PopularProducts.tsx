import { useGetPopularProducts } from "../hooks/useGetPopularProducts";
import { ProductsLayout } from "./ProductsLayout";

export const PopularProducts = () => {
	const { isLoadingPopualrProducts, popularProducts } = useGetPopularProducts();

	return (
		<ProductsLayout
			isLoading={isLoadingPopualrProducts}
			items={popularProducts || []}
			title="Popular products"
		/>
	);
};
