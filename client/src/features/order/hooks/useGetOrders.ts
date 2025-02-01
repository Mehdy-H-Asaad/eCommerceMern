import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOrdersService } from "../services/get-order.service";

export const useGetOrders = () => {
	const { data: orders } = useCustomQuery(["orders"], getOrdersService);

	return { orders };
};
