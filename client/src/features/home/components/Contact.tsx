import MainTitle from "@/components/MainTitle";
import makeUpImg from "../assets/imgs/makeupjpg.jpg";
import GeneralButton from "@/components/ui/GeneralButton";
import { z } from "zod";
export const Contact = () => {
	const contactSchema = z.object({
		name: z.string().min(1, "Name is required"),
		email: z.string().min(1, "Email is required"),
		subject: z.string().min(1, "Subject is required"),
		message: z.string().min(1, "Message is required"),
	});

	return (
		<div className="my-20">
			<div className="container">
				<div className="flex flex-col gap-10 lg:flex-row justify-between items-center w-full">
					<div className="flex flex-col">
						<MainTitle title="Get in touch" addClasses="mb-10" />
						<div className="flex flex-col">
							<input
								type="text"
								placeholder="Name"
								className="border-[#bfbfc8] border-b-[2px] outline-none focus:border-[#23232c] duration-200 p-2 mb-10 placeholder:font-[500] w-[400px]"
							/>
							<input
								type="text"
								placeholder="Email"
								className="border-[#bfbfc8] border-b-[2px] outline-none focus:border-[#23232c] duration-200 p-2 mb-10 placeholder:font-[500] w-[400px]"
							/>
							<input
								type="text"
								placeholder="Subject"
								className="border-[#bfbfc8] border-b-[2px] outline-none focus:border-[#23232c] duration-200 p-2 mb-10 placeholder:font-[500] w-[400px]"
							/>
							<textarea
								placeholder="Message"
								className="border-[#bfbfc8] border-b-[2px] outline-none focus:border-[#23232c] duration-200 p-2 mb-10 placeholder:font-[500] h-28 w-[400px]"
							/>

							<GeneralButton
								title={"submit"}
								addClasses="!bg-black !text-white w-full text-center text-xl "
							/>
						</div>
					</div>

					<img
						src={makeUpImg}
						className="size-[500px] object-contain"
						alt="img"
					/>
				</div>
			</div>
		</div>
	);
};
