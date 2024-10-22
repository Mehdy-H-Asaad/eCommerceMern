import { useCustomMutation } from "@/hooks/useCustomMutation";
import { signup } from "..";

export const useSignup = () => {
	const { mutate: regiestering } = useCustomMutation(signup, ["user"]);

	return { regiestering };
};
