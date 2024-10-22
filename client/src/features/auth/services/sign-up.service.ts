import axiosClient from "@/lib/api/axiosClient";
import { TSignupDTO } from "..";

export const signup = async (userData: TSignupDTO) => {
	try {
		const { data }: { data: TSignupDTO } = await axiosClient.post(
			"/auth/signup",
			userData
		);

		return data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
