import axiosClient from "@/lib/api/axiosClient";
import { TAuthUserDataDTO } from "..";

export const getTheAuthUser = async () => {
	try {
		const { data } = await axiosClient.get("/auth/getTheAuthUser");

		const authUserData: TAuthUserDataDTO = data.data;

		return authUserData;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
