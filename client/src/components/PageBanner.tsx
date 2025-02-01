import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const PageBanner = ({ currentPage }: { currentPage: string }) => {
	return (
		<div className="banner-img">
			<div className="flex gap-6 uppercase text-white relative items-center justify-center orbitron text-2xl sm:text-3xl font-[600] mx-4">
				<Link to={"/"} className="duration-300 hover:text-[#ffffffbe]">
					Home
				</Link>
				<MdOutlineKeyboardArrowRight />
				<div>{currentPage}</div>
			</div>
		</div>
	);
};
