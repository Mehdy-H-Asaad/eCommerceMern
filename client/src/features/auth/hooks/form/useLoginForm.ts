import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema, useLogin } from "../..";
import { TLoginDTO } from "../..";

export const useLoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
	});

	const { signIn } = useLogin();

	const onSubmit = (userData: TLoginDTO) => {
		signIn(userData);
	};

	return { register, handleSubmit, errors, onSubmit };
};
