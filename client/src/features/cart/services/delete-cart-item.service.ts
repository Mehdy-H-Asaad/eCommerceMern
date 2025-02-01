import axiosClient from "@/lib/api/axiosClient";

export const deleteCartItemService = async (productId: string) => {
	try {
		const { data } = await axiosClient.delete(`/cart/delete-item/${productId}`);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
