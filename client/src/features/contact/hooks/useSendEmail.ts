import { useCustomMutation } from "@/hooks/useCustomMutation";
import { sendEmailService } from "../services/sendEmail.service";

export const useSendEmail = () => {
	const { mutate: sendEmail, isPending: isSendingEmail } = useCustomMutation(
		sendEmailService,
		["email"]
	);

	return { sendEmail, isSendingEmail };
};
