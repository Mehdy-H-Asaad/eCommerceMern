import axiosClient from "@/lib/api/axiosClient";
import { TUser } from "../types";

export const getTheAuthUser = async () => {
	try {
		const { data } = await axiosClient.get("/auth/getTheAuthUser");

		const authUserData: TUser = data.data;

		return authUserData;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
