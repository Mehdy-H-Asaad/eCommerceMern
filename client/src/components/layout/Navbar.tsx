import { Link, NavLink } from "react-router-dom";
import "../../assets/styles/global.css";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { navLinks } from "@/data";
import { GoSearch } from "react-icons/go";
import { NavBarSearch } from "../NavBarSearch";
import { CartList } from "@/features/cart/components/CartList";
import { FaRegUser } from "react-icons/fa";
import { CategoriesNavList } from "../CategoriesNavList";

export const Navbar = () => {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
	const [isCategoriesVisible, setIsCategoriesVisible] =
		useState<boolean>(false);

	const handleCategoriesVisiblity = () => {
		setIsCategoriesVisible(!isCategoriesVisible);
	};

	const handleMenuClick = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	const handleCloseMenu = () => {
		setIsMenuVisible(false);
	};

	const handleNavClick = (event: React.MouseEvent) => {
		if (!(event.target as HTMLElement).closest("#categories-btn")) {
			setIsCategoriesVisible(false);
		}
	};

	return (
		<>
			<nav
				className="bg-white h-24 flex items-center relative z-[100]"
				onClick={handleNavClick}
			>
				<div className="container flex items-center justify-between">
					<div>
						<h3 className="orbitron text-4xl font-[700] tracking-wider">
							Souqak
						</h3>
					</div>

					<div className="items-center justify-between gap-8 hidden lg:flex">
						<Link
							to={"/dashboard"}
							className="text-black font-[500] text-lg link link-black order-1"
						>
							Dashboard
						</Link>

						{navLinks.map(ele => (
							<NavLink
								key={ele.path}
								className={({ isActive }) =>
									`link link-black text-black font-[500] text-lg ${
										isActive ? "link-active" : ""
									} ${
										ele.path === "/"
											? "order-2"
											: ele.path === "/shop"
												? "order-3"
												: ele.path === "/about"
													? "order-5"
													: ele.path === "/contact"
														? "order-6"
														: ""
									}`
								}
								to={ele.path}
							>
								{ele.title}
							</NavLink>
						))}

						<div
							id="categories-btn"
							className="order-4 text-black font-[500] text-lg link link-black cursor-pointer"
							onClick={handleCategoriesVisiblity}
						>
							Categories
						</div>

						<CategoriesNavList isVisible={isCategoriesVisible} />

						{/* Login */}
						<Link
							to={"/login"}
							className="text-black font-[500] text-lg link link-black order-7"
						>
							<FaRegUser size={24} />
						</Link>

						{/* Search Icon */}
						<GoSearch
							onClick={() => setIsSearchVisible(!isSearchVisible)}
							className="cursor-pointer order-8"
							size={24}
						/>

						{/* Cart */}
						<div className="order-9 mt-1">
							<CartList />
						</div>
					</div>

					<CiMenuFries
						size={24}
						className="block lg:hidden text-black"
						onClick={handleMenuClick}
					/>
				</div>

				{/* Responsive Menu */}
				<ResponsiveNavbar
					handleCloseMenu={handleCloseMenu}
					isMenuVisible={isMenuVisible}
				/>

				{/* Search Box */}
				<NavBarSearch
					isVisible={isSearchVisible}
					onClose={() => setIsSearchVisible(false)}
				/>
			</nav>

			{/* Blur Overlay */}
			{isSearchVisible && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50"
					onClick={() => setIsSearchVisible(false)}
				/>
			)}

			{isCategoriesVisible && (
				<div
					className="fixed inset-0 bg-black opacity-50 z-50"
					onClick={handleCategoriesVisiblity}
				/>
			)}
		</>
	);
};
