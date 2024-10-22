import axiosClient from "@/lib/api/axiosClient";

export const getSingleUserService = async (id: string) => {
	try {
		const { data } = await axiosClient.get(`/auth/getSingleUser/${id}`);

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
