import { useGetProducts } from "../hooks";
import { ProductsLayout } from "./ProductsLayout";

export const Watches = () => {
	const { isLoadingProducts, products } = useGetProducts({
		categoryName: "watches",
		limit: 8,
	});
	return (
		<ProductsLayout
			isLoading={isLoadingProducts}
			items={products || []}
			title="Watches"
		/>
	);
};
