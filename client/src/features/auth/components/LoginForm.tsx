import MainTitle from "@/components/MainTitle";
import GeneralButton from "@/components/ui/GeneralButton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLoginForm } from "..";

export const LoginForm = () => {
	const { errors, handleSubmit, onSubmit, register } = useLoginForm();

	return (
		<div className="my-16">
			<div className="container">
				<MainTitle title="Welcome to Souqak" addClasses="text-center" />
				<div className="mt-5 flex items-center justify-center gap-4 text-xl font-[500] uppercase">
					<Link className="link link-black flex items-center" to={"/"}>
						Home
					</Link>
					<MdKeyboardArrowRight />
					<h3> Login</h3>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="my-16 flex flex-col items-center gap-7"
				>
					<div className="flex w-[70%] md:w-1/3 flex-col">
						{errors.email && (
							<div className="mb-3 text-sm font-[500] text-red-500">
								{errors.email.message}
							</div>
						)}
						<input
							type="text"
							placeholder="Email"
							className="w-full rounded-md border border-[#eeeeee] px-3 py-2 text-black outline-none placeholder:text-[#222222c9]"
							{...register("email")}
						/>
					</div>

					<div className="flex w-[70%] md:w-1/3 flex-col">
						{errors.password && (
							<div className="mb-3 text-sm font-[500] text-red-500">
								{errors.password.message}
							</div>
						)}
						<input
							type="text"
							placeholder="Password"
							className="w-full rounded-md border border-[#eeeeee] px-3 py-2 text-black outline-none placeholder:text-[#222222c9]"
							{...register("password")}
						/>
					</div>
					<GeneralButton
						type="submit"
						title={"Login"}
						addClasses="!w-[70%] md:!w-1/3 text-center !bg-black text-white"
					/>
					<div className="flex w-[70%] md:w-1/3 flex-col">
						<div className="mb-2 text-sm font-[500]">
							Don't have an account?
						</div>
						<Link to={"/signup"} className="w-full text-center">
							<GeneralButton
								title={"Sign up"}
								addClasses="w-full border border-[black]"
							/>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
