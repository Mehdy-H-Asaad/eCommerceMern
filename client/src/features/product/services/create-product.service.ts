import { TResponse } from "@/shared/types";
import { TCreateProductDTO, TProductDTO } from "../types";
import axiosClient from "@/lib/api/axiosClient";

export const createProductService = async (productData: TCreateProductDTO) => {
	try {
		const { data }: { data: TResponse<TProductDTO> } = await axiosClient.post(
			"/products",
			productData
		);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
