import MainTitle from "@/components/MainTitle";
import PageWithLinkToHome from "@/components/PageWithLinkToHome";
import GeneralButton from "@/components/ui/GeneralButton";
import { Link } from "react-router-dom";
import { useSignupForm } from "..";
import { SignupFormInput } from "..";

export const SignUpForm = () => {
	const { errors, handleSubmit, onSumbit, register } = useSignupForm();

	return (
		<div className="my-16">
			<div className="container">
				<MainTitle title="Welcome to Souqak" addClasses="text-center" />
				<div className="flex items-center justify-center font-[500] text-xl gap-4 uppercase">
					<PageWithLinkToHome specificPath="Sign up" />
				</div>

				<form
					onSubmit={handleSubmit(onSumbit)}
					className="flex flex-col items-center my-16 gap-7"
				>
					<SignupFormInput
						error={errors.fullName}
						name="fullName"
						placeholder="Full Name"
						register={register}
					/>

					<SignupFormInput
						error={errors.userName}
						name="userName"
						placeholder="Username"
						register={register}
					/>
					<SignupFormInput
						error={errors.email}
						name="email"
						placeholder="Email"
						register={register}
					/>
					<SignupFormInput
						error={errors.password}
						name="password"
						placeholder="Password"
						register={register}
					/>

					<GeneralButton
						type="submit"
						title={"Signup"}
						addClasses="!w-1/3 text-center !bg-black text-white"
					/>
					<div className="flex flex-col w-1/3">
						<div className="font-[500] text-sm mb-2">
							Already have an account?
						</div>
						<Link to={"/login"} className="w-full text-center ">
							<GeneralButton
								title={"Login"}
								addClasses="w-full border border-[black]"
							/>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
