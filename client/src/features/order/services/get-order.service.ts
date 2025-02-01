import axiosClient from "@/lib/api/axiosClient";

export const getOrdersService = async () => {
	try {
		const { data } = await axiosClient.get("/orders");

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error);
	}
};
