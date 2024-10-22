import { TSignupForm } from "..";

export const SignupFormInput = ({
	error,
	name,
	register,
	placeholder,
}: TSignupForm) => {
	return (
		<div className="flex flex-col w-[70%] md:w-1/3">
			{error && (
				<div className="mb-3 text-sm font-[500] text-red-500">
					{error.message}
				</div>
			)}
			<input
				type="text"
				placeholder={placeholder}
				className="py-2 px-3 outline-none border border-[#eeeeee]  w-full rounded-md placeholder:text-[#222222c9] text-black"
				{...register(name)}
			/>
		</div>
	);
};
