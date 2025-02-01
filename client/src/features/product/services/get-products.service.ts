import { TResponse } from "@/shared/types";
import axiosClient from "../../../lib/api/axiosClient";
import { TProductDTO } from "../types";

type TGetProductsService = {
	categoryId?: string | null;
	status?: string | null;
	discount?: string | null;
	maxPrice?: number | null;
	selectedCategoryId?: string;
	page?: number;
	limit?: number;
	search?: string | null;
	categoryName?: string;
};

export const getProducts = async ({
	categoryId,
	maxPrice,
	discount,
	limit = 10,
	page = 1,
	selectedCategoryId,
	categoryName,
	status,
	search,
}: TGetProductsService): Promise<TProductDTO[]> => {
	try {
		const queryParams = new URLSearchParams();
		queryParams.append("limit", limit.toString());
		queryParams.append("page", page.toString());

		if (categoryId) queryParams.append("category", categoryId);
		else if (selectedCategoryId)
			queryParams.append("category", selectedCategoryId);

		if (status) queryParams.append("status", status);
		if (discount) queryParams.append("discount", discount);
		if (maxPrice && maxPrice != 0)
			queryParams.append("maxPrice", maxPrice.toString());

		if (search) {
			queryParams.append("search", search);
		}

		const endPoint = categoryName
			? `/products/${categoryName}?${queryParams.toString()}`
			: `/products/?${queryParams.toString()}`;

		const { data }: { data: TResponse<TProductDTO[]> } =
			await axiosClient.get(endPoint);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
