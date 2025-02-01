import { useForm } from "react-hook-form";
import { profileSchema } from "../../schema/profile.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateProfile } from "../useUpdateProfile";

export const useUpdateProfileForm = () => {
	const updateProfileSchema = profileSchema.omit({
		oldPassword: true,
		newPassword: true,
	});
	const { isUpdatingProfile, updateProfile } = useUpdateProfile();
	const updateProfileForm = useForm<z.infer<typeof updateProfileSchema>>({
		resolver: zodResolver(updateProfileSchema),
	});

	const onUpdateProfile = (values: z.infer<typeof updateProfileSchema>) => {
		updateProfile(values);
	};

	return { updateProfileForm, isUpdatingProfile, onUpdateProfile };
};
