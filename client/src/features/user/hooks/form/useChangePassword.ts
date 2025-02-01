import { useForm } from "react-hook-form";
import { profileSchema } from "../../schema/profile.schema";
import { useUpdatePassword } from "../useUpdatePassword";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUpdatePasswordForm = () => {
	const updatePasswordSchema = profileSchema.pick({
		oldPassword: true,
		newPassword: true,
	});

	const { isUpdatingPassword, updatePassword } = useUpdatePassword();

	const updatePasswordForm = useForm<z.infer<typeof updatePasswordSchema>>({
		resolver: zodResolver(updatePasswordSchema),
		defaultValues: {
			newPassword: "",
			oldPassword: "",
		},
	});

	const onUpdatePassword = (values: z.infer<typeof updatePasswordSchema>) => {
		updatePassword(values);
	};

	return { isUpdatingPassword, updatePasswordForm, onUpdatePassword };
};
