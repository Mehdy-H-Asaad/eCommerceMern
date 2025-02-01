import { TResponse } from "@/shared/types";
import { TGetCartItemsDTO, TUpdateQuantityDTO } from "../types";
import axiosClient from "@/lib/api/axiosClient";

export const updateQuantityService = async (values: TUpdateQuantityDTO) => {
	try {
		const { data }: { data: TResponse<TGetCartItemsDTO> } =
			await axiosClient.put(`/cart/update-quantity/${values.productId}`, {
				quantity: values.quantity,
			});

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
