import axiosClient from "@/lib/api/axiosClient";
import { TRefreshToekenResponseDTO } from "@/shared/types";

export const useRefreshToken = async () => {
	try {
		const { data }: { data: TRefreshToekenResponseDTO } = await axiosClient.get(
			"/auth/refresh",
			{
				withCredentials: true,
			}
		);

		localStorage.setItem("accessToken", data.accessToken);

		return data.accessToken;
	} catch (error: any) {
		throw new Error(error);
	}
};
