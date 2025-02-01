import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactInfo } from "@/features/contact/components/ContactInfo";

export const ContactPage = () => {
	return (
		<>
			<PageBanner currentPage="Contact us" />
			<div className="container py-primary">
				<div className="flex flex-col gap-20 md:gap-0 md:flex-row justify-around">
					<ContactForm />
					<ContactInfo />
				</div>
			</div>
		</>
	);
};
