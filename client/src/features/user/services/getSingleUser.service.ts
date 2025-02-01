import { TUser } from "@/features/auth/types";
import axiosClient from "@/lib/api/axiosClient";
import { TResponse } from "@/shared/types";

export const getSingleUserService = async (id: string) => {
	try {
		const { data }: { data: TResponse<TUser> } = await axiosClient.get(
			`/auth/getSingleUser/${id}`
		);

		return data.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
