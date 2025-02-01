import { TResponse } from "@/shared/types";
import { TProductDTO } from "../types";
import axiosClient from "@/lib/api/axiosClient";

export const getPopularProductsService = async () => {
	try {
		const { data }: { data: TResponse<TProductDTO[]> } = await axiosClient.get(
			`/products/popular-products`
		);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
