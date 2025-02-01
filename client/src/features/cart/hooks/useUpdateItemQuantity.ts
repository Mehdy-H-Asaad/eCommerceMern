import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateQuantityService } from "../services/update-quantity.service";

export const useUpdateItemQuantity = () => {
	const { mutate: updateQuantity, isPending: isUpdating } = useCustomMutation(
		updateQuantityService,
		["cart"],
		"Updated successfully"
	);

	return { updateQuantity, isUpdating };
};
