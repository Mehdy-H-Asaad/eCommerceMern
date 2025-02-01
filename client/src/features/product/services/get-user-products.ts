import axiosClient from "@/lib/api/axiosClient";
import { TResponse } from "@/shared/types";
import { TProductDTO } from "../types";

export const getUserProductsService = async (userId: string) => {
	try {
		const { data }: { data: TResponse<TProductDTO[]> } = await axiosClient.get(
			`/products/user-products/${userId}`
		);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
