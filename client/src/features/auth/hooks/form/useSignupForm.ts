import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignup } from "..";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../index";
export const useSignupForm = () => {
	const signUpForm = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			email: "",
			fullName: "",
			password: "",
			userName: "",
		},
	});

	const { regiestering } = useSignup();

	const onSumbit = (values: z.infer<typeof signUpSchema>) => {
		regiestering(values);
	};

	return { signUpForm, onSumbit };
};
