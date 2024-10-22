import { Link } from "react-router-dom";
import "../../assets/styles/global.css";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navLinks } from "@/data";
ResponsiveNavbar;

export const Navbar = () => {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

	const handleMenuClick = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	const handleCloseMenu = () => {
		setIsMenuVisible(false);
	};

	return (
		<nav className="bg-white h-24 flex items-center">
			<div className="container flex items-center justify-between">
				<div>
					<h3 className="orbitron text-4xl font-[700] tracking-wider">
						Souqak
					</h3>
				</div>

				<div className=" items-center justify-between gap-8 hidden lg:flex">
					<Link
						to={"/dashboard"}
						className="text-black font-[500] text-lg link link-black"
					>
						Dashboard
					</Link>
					{navLinks.map(ele => {
						return (
							<Link
								key={ele.path}
								className={`${
									typeof ele.title === "string" ? "link link-black" : ""
								} text-black font-[500] text-lg`}
								to={ele.path}
							>
								{ele.title}
							</Link>
						);
					})}
				</div>

				<CiMenuFries
					size={24}
					className="block lg:hidden text-black"
					onClick={handleMenuClick}
				/>
			</div>

			<ResponsiveNavbar
				handleCloseMenu={handleCloseMenu}
				isMenuVisible={isMenuVisible}
			/>
		</nav>
	);
};

export default Navbar;
