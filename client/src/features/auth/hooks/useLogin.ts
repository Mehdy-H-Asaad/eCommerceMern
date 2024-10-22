import { useCustomMutation } from "@/hooks/useCustomMutation";
import { login } from "..";

export const useLogin = () => {
	const { mutate: signIn, data: signInData } = useCustomMutation(login, [
		"users",
	]);

	return { signIn, signInData };
};
