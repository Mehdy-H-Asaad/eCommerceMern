import {
	IoAnalyticsOutline,
	IoListOutline,
	IoCreateOutline,
	IoSettings,
	IoChatboxEllipses,
} from "react-icons/io5";
import { TDashboard } from "../dashboardHome/types";

export const dashBoardSideBarLinks: TDashboard[] = [
	{
		title: "Dashboard",
		pathes: [
			{
				path: "/dashboard",
				actionName: "Analytics",
				icon: <IoAnalyticsOutline size={20} />,
			},
		],
	},
	{
		title: "Products",

		pathes: [
			{
				path: "/dashboard/products/list-products",
				icon: <IoListOutline size={20} />,
				actionName: "List all products",
			},
			{
				path: "/dashboard/products/create-product",
				icon: <IoCreateOutline size={20} />,
				actionName: "Create product",
			},
		],
	},
	{
		title: "Orders",
		pathes: [
			{
				actionName: "List orders",
				icon: <IoListOutline size={20} />,
				path: "/dashboard/orders/list-orders",
			},
		],
	},
	{
		title: "Account",
		pathes: [
			{
				actionName: "Settings",
				icon: <IoSettings size={20} />,
				path: "/dashboard/profile/settings",
			},
		],
	},
	{
		title: "Messages",
		pathes: [
			{
				actionName: "Chats",
				icon: <IoChatboxEllipses size={20} />,
				path: "/dashboard/profile/chats",
			},
		],
	},
];
