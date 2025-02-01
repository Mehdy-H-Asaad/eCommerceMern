import { useCustomMutation } from "@/hooks/useCustomMutation";
import { addItemToCartService } from "../services";

export const useAddItemToCart = () => {
	const { mutate: addItemToCart, isPending: isAddingItem } = useCustomMutation(
		addItemToCartService,
		["cart"],
		"Item added successfully"
	);

	return { addItemToCart, isAddingItem };
};
