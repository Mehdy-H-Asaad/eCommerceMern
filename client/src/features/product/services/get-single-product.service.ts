import { TResponse } from "@/shared/types";
import { TProductDTO } from "../types";
import axiosClient from "@/lib/api/axiosClient";

export const getSingleProduct = async (id: string): Promise<TProductDTO> => {
	try {
		const { data }: { data: TResponse<TProductDTO> } = await axiosClient.get(
			`/products/single-product/${id}`
		);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
