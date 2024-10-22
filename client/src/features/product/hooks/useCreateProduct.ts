import { useCustomMutation } from "@/hooks/useCustomMutation";
import { createProductService } from "..";

export const useCreateProduct = () => {
	const {
		mutate: createProduct,
		isError: isCreatingProductError,
		isPending: isCreatingProductPending,
	} = useCustomMutation(createProductService, ["products"]);

	return { createProduct, isCreatingProductError, isCreatingProductPending };
};
