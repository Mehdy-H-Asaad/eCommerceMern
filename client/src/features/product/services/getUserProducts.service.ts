import axiosClient from "@/lib/api/axiosClient";

export const getUserProductsService = async (userId: string) => {
	try {
		const { data } = await axiosClient.get(`/products/userProducts/${userId}`);

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
