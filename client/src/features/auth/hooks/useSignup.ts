import { useCustomMutation } from "@/hooks/useCustomMutation";
import { signup } from "../index";

export const useSignup = () => {
	const { mutate: regiestering } = useCustomMutation(signup, ["users"]);

	return { regiestering };
};
