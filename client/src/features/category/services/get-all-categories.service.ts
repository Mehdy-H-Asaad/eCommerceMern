import axiosClient from "@/lib/api/axiosClient";
import { TCategory } from "../types";
import { TResponse } from "@/shared/types";

export const getAllCategoriesService = async () => {
	try {
		const { data }: { data: TResponse<TCategory[]> } =
			await axiosClient.get("/categories");

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
