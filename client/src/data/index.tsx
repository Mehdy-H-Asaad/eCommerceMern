import { FaRegUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";

export const navLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Shop",
		path: "/shop",
	},
	{
		title: "Contact us",
		path: "/contact",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: <GoSearch size={24} />,
		path: "/search",
	},
	{
		title: <FaRegUser size={24} />,
		path: "/login",
	},
	{
		title: <RiShoppingCartLine size={24} />,
		path: "/cart",
	},
];
