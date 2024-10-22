import axiosClient from "@/lib/api/axiosClient";

export const getAllCategoriesService = async () => {
	try {
		const { data } = await axiosClient.get("/categories");
		return data.data;
	} catch (error: any) {
		console.log(error);

		throw new Error(error.response.error);
	}
};
