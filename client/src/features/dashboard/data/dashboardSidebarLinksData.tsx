import {
	IoAnalyticsOutline,
	IoListOutline,
	IoCreateOutline,
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
];
