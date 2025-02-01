import { useGetProducts } from "../hooks";
import { ProductsLayout } from "./ProductsLayout";

export const Electronics = () => {
	const { products, isLoadingProducts } = useGetProducts({
		categoryName: "electronics",
	});

	return (
		<ProductsLayout
			isLoading={isLoadingProducts}
			items={products || []}
			title="Electronics"
		/>
	);
};
