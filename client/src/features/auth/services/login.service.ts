import { publicAxios } from "@/lib/api/axiosClient";
import { TLoginDTO, TLoginResponseDTO } from "../types";

export const login = async (userData: TLoginDTO) => {
	try {
		const { data }: { data: TLoginResponseDTO } = await publicAxios.post(
			"/auth/login",
			userData,
			{
				withCredentials: true,
			}
		);

		localStorage.setItem("accessToken", data.accessToken);

		return data.accessToken;
	} catch (error: any) {
		throw new Error(error.response.data.error);
	}
};
