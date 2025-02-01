import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getCartItemsSerive } from "../services";

export const useGetCartItems = () => {
	const { data: cartItems } = useCustomQuery(["cart"], getCartItemsSerive);

	return { cartItems };
};
