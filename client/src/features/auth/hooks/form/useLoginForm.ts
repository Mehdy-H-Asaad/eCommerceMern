import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema, useLogin } from "../../index";

export const useLoginForm = () => {
	const loginForm = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { signIn } = useLogin();

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		signIn(values);
	};

	return { loginForm, onSubmit };
};
