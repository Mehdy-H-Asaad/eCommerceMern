import { TResponse } from "@/shared/types";
import axiosClient from "@/lib/api/axiosClient";
import { TCartItemsDTO } from "../types";

export const getCartItemsSerive = async () => {
	try {
		const { data }: { data: TResponse<TCartItemsDTO> } =
			await axiosClient.get("/cart");

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
