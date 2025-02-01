import { TSendEmailDTO } from "../types";
import { TResponse } from "@/shared/types";
import axiosClient from "@/lib/api/axiosClient";

export const sendEmailService = async (values: TSendEmailDTO) => {
	try {
		const { data }: { data: TResponse<void> } = await axiosClient.post(
			`/user/send-email`,
			values
		);

		console.log(data);

		return data.data;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
