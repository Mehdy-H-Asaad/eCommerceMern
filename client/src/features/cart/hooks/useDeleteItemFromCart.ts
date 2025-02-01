import { useCustomMutation } from "@/hooks/useCustomMutation";
import { deleteCartItemService } from "../services";

export const useDeleteItemFromCart = () => {
	const { mutate: deleteItemFromCart, isPending: isDeletingItem } =
		useCustomMutation(deleteCartItemService, ["cart"], "Item deleted");

	return { deleteItemFromCart, isDeletingItem };
};
