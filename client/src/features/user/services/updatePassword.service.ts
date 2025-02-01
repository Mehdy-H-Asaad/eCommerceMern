import { TResponse } from "@/shared/types";
import { TUpdatePasswordDTO } from "../types";
import { TUser } from "@/features/auth/types";
import axiosClient from "@/lib/api/axiosClient";

export const updatePasswordService = async (values: TUpdatePasswordDTO) => {
	try {
		const { data }: { data: TResponse<TUser> } = await axiosClient.put(
			`/user/profile/settings/change-password`,
			values
		);

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
