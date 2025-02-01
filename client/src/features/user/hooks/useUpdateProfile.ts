import { useCustomMutation } from "@/hooks/useCustomMutation";
import { updateProfileService } from "../services/updateProfile.service";

export const useUpdateProfile = () => {
	const { mutate: updateProfile, isPending: isUpdatingProfile } =
		useCustomMutation(
			updateProfileService,
			["user"],
			"Profile updated successfully"
		);

	return { updateProfile, isUpdatingProfile };
};
