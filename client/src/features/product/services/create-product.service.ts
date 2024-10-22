import { TCreateProductDTO } from "..";
import axiosClient from "@/lib/api/axiosClient";

export const createProductService = async (productData: TCreateProductDTO) => {
	try {
		const { data } = await axiosClient.post("/products", productData);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
