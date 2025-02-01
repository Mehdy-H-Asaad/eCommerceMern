import axiosClient from "@/lib/api/axiosClient";

export const deleteProductService = async (id: string) => {
	try {
		const { data } = await axiosClient.delete(`/products/${id}`);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
