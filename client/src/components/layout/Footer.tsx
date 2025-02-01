import { Link } from "react-router-dom";
import MainTitle from "../MainTitle";
import { navLinks } from "@/data";

const Footer = () => {
	return (
		<div className="bg-[#222222] py-20 text-white">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<div className="flex flex-col gap-8 max-w-60">
						<h3 className="orbitron text-4xl font-[700] tracking-wider">
							Souqak
						</h3>

						<div>Dubai, United Arab Emirates</div>

						<div>
							Phone: +971 <span className="tracking-wider">507725069</span>
						</div>

						<div>
							Email:{" "}
							<a className="max-w-4" href="mailto:mehdyassad.sy.2003@gmail.com">
								mehdyasaad.sy.2003@gmail.com
							</a>
						</div>
					</div>

					<div className="flex flex-col gap-8">
						<MainTitle title="Quick Links" addClasses="orbitron" />
						{navLinks
							.filter(ele => typeof ele.title == "string")
							.map(ele => {
								return (
									<Link
										key={ele.path}
										className="link link-white w-fit"
										to={ele.path}
									>
										{ele.title}
									</Link>
								);
							})}
					</div>

					<div className="flex flex-col gap-8">
						<MainTitle title="About Us" addClasses="orbitron" />
						<p>
							Welcome to Souqak, your online marketplace for top products
							delivered fast. We partner with trusted suppliers to bring you
							great deals and a seamless shopping experience.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
