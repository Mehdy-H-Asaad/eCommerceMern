import { useGetProducts } from "../hooks";
// import { useGetProductsByCateogry } from "../hooks/useGetProductsByCategory";
import { ProductsLayout } from "./ProductsLayout";

export const MenClothes = () => {
	const { products, isLoadingProducts } = useGetProducts({
		categoryName: "men's clothes",
		limit: 8,
	});

	return (
		<ProductsLayout
			isLoading={isLoadingProducts}
			items={products || []}
			title="Men's Clothes"
		/>
	);
};
