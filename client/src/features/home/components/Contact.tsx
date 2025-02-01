import makeUpImg from "../assets/imgs/makeupjpg.jpg";
import { ContactForm } from "@/features/contact/components/ContactForm";
export const Contact = () => {
	return (
		<div className="my-primary">
			<div className="container">
				<div className="flex flex-col gap-10 md:flex-row justify-between items-center w-full">
					<ContactForm />
					<img
						src={makeUpImg}
						className="size-[20rem] lg:size-[500px] object-contain rounded-md mb-auto"
						alt="img"
					/>
				</div>
			</div>
		</div>
	);
};
