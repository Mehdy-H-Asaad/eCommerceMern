import { TResponse } from "@/shared/types";
import { TProductDTO } from "../types";
import axiosClient from "@/lib/api/axiosClient";

export const getProductsByCategoryService = async (categoryName: string) => {
	try {
		const { data }: { data: TResponse<TProductDTO[]> } = await axiosClient.get(
			`/categories/${categoryName}`
		);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
