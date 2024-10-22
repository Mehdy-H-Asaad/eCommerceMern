import axiosClient from "../../../lib/api/axiosClient";
import { TProductDTO } from "../types";

export const getProducts = async (
	categoryId?: string | null,
	productCondition?: string | null,
	discount?: string | null
): Promise<TProductDTO[]> => {
	try {
		const queryParams = new URLSearchParams();
		if (categoryId) queryParams.append("category", categoryId);
		if (productCondition) queryParams.append("status", productCondition);
		if (discount) queryParams.append("discount", discount);

		const { data } = await axiosClient.get(
			`/products/?${queryParams.toString()}`
		);
		return data.data;
	} catch (error: any) {
		throw new Error(error.response.error);
	}
};
