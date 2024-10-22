import { TProductDTO } from "../types";
import axiosClient from "@/lib/api/axiosClient";

export const getSingleProduct = async (id: string): Promise<TProductDTO> => {
	try {
		const { data } = await axiosClient.get(`/products/${id}`);

		return data.data[0];
	} catch (error: any) {
		throw new Error(error.response);
	}
};
