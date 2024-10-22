import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignup } from "..";
import { zodResolver } from "@hookform/resolvers/zod";
import { singupSchema, TSignupDTO } from "../..";
export const useSignupForm = () => {
	const { regiestering } = useSignup();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof singupSchema>>({
		resolver: zodResolver(singupSchema),
	});

	const onSumbit = (userData: TSignupDTO) => {
		regiestering(userData);
	};

	return { register, handleSubmit, errors, onSumbit };
};
