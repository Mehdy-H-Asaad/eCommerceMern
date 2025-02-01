import MainTitle from "@/components/MainTitle";
import PageWithLinkToHome from "@/components/PageWithLinkToHome";
import GeneralButton from "@/components/ui/GeneralButton";
import { Link } from "react-router-dom";
import { useSignupForm } from "../index";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const SignUpForm = () => {
	const { signUpForm, onSumbit } = useSignupForm();

	return (
		<div className="my-16">
			<div className="container">
				<MainTitle title="Welcome to Souqak" addClasses="text-center" />
				<div className="flex items-center justify-center font-[500] text-xl gap-4 uppercase">
					<PageWithLinkToHome specificPath="Sign up" />
				</div>
				<Form {...signUpForm}>
					<form
						onSubmit={signUpForm.handleSubmit(onSumbit)}
						className="flex flex-col items-center my-16 gap-7"
					>
						<FormField
							control={signUpForm.control}
							name="fullName"
							render={({ field }) => (
								<FormItem className="flex w-[70%] md:w-1/3 flex-col">
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="w-full rounded-md border border-[#eeeeee] px-3 py-2 text-black outline-none placeholder:text-[#222222c9]"
											placeholder="Full Name"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={signUpForm.control}
							name="userName"
							render={({ field }) => (
								<FormItem className="flex w-[70%] md:w-1/3 flex-col">
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="w-full rounded-md border border-[#eeeeee] px-3 py-2 text-black outline-none placeholder:text-[#222222c9]"
											placeholder="Username"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={signUpForm.control}
							name="email"
							render={({ field }) => (
								<FormItem className="flex w-[70%] md:w-1/3 flex-col">
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="w-full rounded-md border border-[#eeeeee] px-3 py-2 text-black outline-none placeholder:text-[#222222c9]"
											placeholder="Email"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={signUpForm.control}
							name="password"
							render={({ field }) => (
								<FormItem className="flex w-[70%] md:w-1/3 flex-col">
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="w-full rounded-md border border-[#eeeeee] px-3 py-2 text-black outline-none placeholder:text-[#222222c9]"
											placeholder="Password"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
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
				</Form>
			</div>
		</div>
	);
};
