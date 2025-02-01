import axiosClient from "@/lib/api/axiosClient";
import { TAddItemToCartDTO, TCartItemsDTO } from "../types";
import { TResponse } from "@/shared/types";

export const addItemToCartService = async (values: TAddItemToCartDTO) => {
	try {
		const { data }: { data: TResponse<TCartItemsDTO> } = await axiosClient.post(
			`/cart/add-item/${values.productId}`,
			{ quantity: values.quantity, price: values.price }
		);

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
