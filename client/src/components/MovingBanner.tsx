import { languages } from "@/data";
import Marquee from "react-fast-marquee";
export const MovingBanner = () => {
	return (
		<Marquee
			speed={100}
			pauseOnHover
			gradient={false}
			autoFill
			className="border-t border-b border-t-gray-border-b-gray-100 cursor-pointer border-b-gray-100  py-10 "
		>
			{languages.map(langauge => (
				<p key={langauge.id} className="mr-10 font-[600] text-4xl">
					{langauge.language}
				</p>
			))}
		</Marquee>
	);
};
