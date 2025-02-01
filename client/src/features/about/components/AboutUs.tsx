import AboutImg from "../assets/Workspace.jpg";
import MainTitle from "@/components/MainTitle";
import { PageBanner } from "@/components/PageBanner";
export const AboutUs = () => {
	return (
		<div>
			<PageBanner currentPage="About us" />
			<div className="container py-primary">
				<div className="flex flex-col lg:flex-row gap-20 xl:gap-x-0 justify-between">
					<div className="flex flex-col items-center lg:items-start gap-4 justify-center">
						<MainTitle title="Our Mission" />
						<p className="font-[500] max-w-[40rem] text-center lg:text-start">
							In SOUQAK, our mission is To empower individuals and businesses by
							providing a secure, user-friendly, and profitable ecommerce
							platform where users can seamlessly buy and sell products online.
							We are committed to fostering trust, innovation, and financial
							growth for our community while ensuring a safe and rewarding
							experience for all.
						</p>
					</div>
					<img
						src={AboutImg}
						className="size-[30rem] object-cover rounded-md mx-auto lg:mx-0"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
