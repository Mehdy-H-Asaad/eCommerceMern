import axiosClient from "@/lib/api/axiosClient";

export const updateOrderService = async (orderData) => {
	try {
		const { data } = await axiosClient.put("/orders/update-order", {
			...orderData,
		});
		console.log(data.data);

		return data.data;
	} catch (error: any) {
		throw new Error(error);
	}
};
