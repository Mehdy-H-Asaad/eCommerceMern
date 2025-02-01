import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export const ContactInfo = () => {
	return (
		<div>
			<div className="flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<div className="font-[700] orbitron text-2xl uppercase">Address</div>
					<p className="font-[500]">Dubai, United Arab Emirates</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="font-[700] orbitron text-2xl uppercase">
						Phone Number
					</div>
					<p className="font-[500]">+971 507725069</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="font-[700] orbitron text-2xl uppercase">Email</div>
					<p className="font-[500]">mehdyasaad.sy.2003@gmail.com</p>
				</div>
				<div className="flex flex-col gap-4">
					<div className="font-[700] orbitron text-2xl uppercase">
						Social Media
					</div>
					<div className="flex gap-8">
						<FaLinkedin className="bg-black text-white rounded-[50%] p-2 size-8 cursor-pointer duration-200 hover:-mt-1" />
						<FaTiktok className="bg-black text-white rounded-[50%] p-2 size-8 cursor-pointer duration-200 hover:-mt-1" />
						<FaInstagram className="bg-black text-white rounded-[50%] p-2 size-8 cursor-pointer duration-200 hover:-mt-1" />
					</div>
				</div>
			</div>
		</div>
	);
};
