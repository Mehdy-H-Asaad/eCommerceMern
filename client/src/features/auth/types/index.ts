import { UseFormRegister, FieldError } from "react-hook-form";

export type TUser = {
	_id?: string;
	userName: string;
	fullName: string;
	email: string;
	password: string;
	role?: string;
	token?: string;
	likedItems?: string[];
	createdAt: string;
};

export type TSignupDTO = {
	fullName: string;
	userName: string;
	email: string;
	password: string;
};

type TSignupSchema = TSignupDTO;

export type TSignupForm = {
	register: UseFormRegister<TSignupSchema>;
	error: FieldError | undefined;
	name: keyof TSignupSchema;
	placeholder: string;
};

export type TLoginDTO = Omit<TSignupDTO, "fullName" | "userName">;

export type TLoginResponseDTO = {
	status: string;
	accessToken: string;
};

export type TAuthUserDataDTO = {
	fullName: string;
	userName: string;
	_id: string;
};
