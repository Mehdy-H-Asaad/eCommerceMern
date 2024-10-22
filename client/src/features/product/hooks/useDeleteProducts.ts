import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteProductService } from "..";

export const useDeleteProducts = () => {
	const { mutate: deleteProduct } = useCustomMutation(deleteProductService, [
		"products",
	]);

	return { deleteProduct };
};
