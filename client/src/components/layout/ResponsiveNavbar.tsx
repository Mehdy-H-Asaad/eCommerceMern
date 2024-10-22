import { navLinks } from "@/data";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

type TResponsiveNavbar = {
	isMenuVisible: boolean;
	handleCloseMenu(): void;
};

const ResponsiveNavbar = ({
	isMenuVisible,
	handleCloseMenu,
}: TResponsiveNavbar) => {
	return (
		<nav
			className={`${
				isMenuVisible
					? "h-screen bg-black transition-all duration-[800ms] ease-in-out fixed top-0 left-0 w-full flex  items-center justify-center"
					: "h-screen bg-black transition-all duration-[800ms] ease-in-out fixed top-0 -left-full w-full flex  items-center justify-center"
			}`}
		>
			<div className="flex flex-col gap-14 justify-center">
				{navLinks
					.filter(ele => typeof ele.title === "string")
					.map(ele => {
						return (
							<Link
								key={ele.path}
								className={`text-white font-[500] text-5xl `}
								to={ele.path}
							>
								{ele.title}
							</Link>
						);
					})}
			</div>

			<IoMdClose
				size={60}
				className="absolute top-8 right-8 text-white cursor-pointer"
				onClick={handleCloseMenu}
			/>
		</nav>
	);
};

export default ResponsiveNavbar;
