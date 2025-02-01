import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateOrderService } from "../services/update-order.service";

export const useUpdateOrder = () => {
	const { mutate: updateOrder } = useCustomMutation(
		() => updateOrderService(),
		["order"]
	);

	return { updateOrder };
};
