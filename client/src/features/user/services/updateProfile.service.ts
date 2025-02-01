import { TResponse } from "@/shared/types";
import { TUpdateProfileDTO } from "../types";
import { TUser } from "@/features/auth/types";
import axiosClient from "@/lib/api/axiosClient";

export const updateProfileService = async (values: TUpdateProfileDTO) => {
	try {
		const data: { data: TResponse<TUser> } = await axiosClient.put(
			`/user/profile/settings`,
			values
		);

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
