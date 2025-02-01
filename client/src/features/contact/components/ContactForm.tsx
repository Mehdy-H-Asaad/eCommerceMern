import MainTitle from "@/components/MainTitle";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import GeneralButton from "@/components/ui/GeneralButton";
import { useSendEmailForm } from "../hooks/form/useSendEmailForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
	const { emailForm, onSendEmail } = useSendEmailForm();
	return (
		<div className="flex flex-col">
			<MainTitle title="Get in touch" addClasses="mb-10" />
			<Form {...emailForm}>
				<form
					onSubmit={emailForm.handleSubmit(onSendEmail)}
					className="flex flex-col gap-10"
				>
					<FormField
						control={emailForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="Name"
										className="border-[#bfbfc8] border-b-[2px] border-t-0 border-r-0 border-l-0 rounded-none outline-none focus:border-[#23232c] duration-200 p-2 placeholder:font-[500] w-full lg:w-[400px]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={emailForm.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="Email"
										className="border-[#bfbfc8] border-b-[2px] border-t-0 border-r-0 border-l-0 rounded-none outline-none focus:border-[#23232c] duration-200 p-2 placeholder:font-[500] w-full lg:w-[400px]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={emailForm.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										placeholder="Subject"
										className="border-[#bfbfc8] border-b-[2px] border-t-0 border-r-0 border-l-0 rounded-none outline-none focus:border-[#23232c] duration-200 p-2 placeholder:font-[500] w-full lg:w-[400px]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={emailForm.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea
										{...field}
										placeholder="Message"
										className="border-[#bfbfc8] border-b-[2px] border-t-0 border-r-0 border-l-0 rounded-none outline-none focus:border-[#23232c] duration-200 p-2 placeholder:font-[500] w-full lg:w-[400px]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<GeneralButton
						title={"submit"}
						addClasses="!bg-black !text-white w-full text-center text-xl "
					/>
				</form>
			</Form>
		</div>
	);
};
