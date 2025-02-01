import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSendEmail } from "../useSendEmail";

export const useSendEmailForm = () => {
	const { isSendingEmail, sendEmail } = useSendEmail();
	const emailSchema = z.object({
		message: z.string().min(1, "Message is required"),
		subject: z.string().optional(),
		email: z.string().min(1, "Email is required").email("Email is not valid"),
		name: z.string().min(1, "Name is required"),
	});

	const emailForm = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: "",
			message: "",
			name: "",
			subject: "",
		},
	});

	const onSendEmail = (values: z.infer<typeof emailSchema>) => {
		sendEmail(values);
	};

	return { emailForm, onSendEmail, isSendingEmail };
};
