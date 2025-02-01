import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updatePasswordService } from "../services/updatePassword.service";

export const useUpdatePassword = () => {
	const { mutate: updatePassword, isPending: isUpdatingPassword } =
		useCustomMutation(updatePasswordService, ["user"]);

	return { updatePassword, isUpdatingPassword };
};
