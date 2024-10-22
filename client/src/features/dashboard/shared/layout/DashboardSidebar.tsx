import { Link } from "react-router-dom";
import { dashBoardSideBarLinks } from "../..";

export const DashboardSidebar = () => {
	return (
		<div className=" border-r border-gray-200 flex flex-col ">
			<div className=" mt-10 w-52 ">
				<h3 className="text-2xl font-[600] mb-10 capitalize">Main menu</h3>

				<div className="flex flex-col gap-10 mr-8">
					{dashBoardSideBarLinks.map(ele => (
						<div>
							<div className="text-xl font-[700]">{ele.title}</div>

							<div className="flex flex-col gap-2 mt-4 ">
								{ele.pathes.map(path => (
									<Link
										to={path.path}
										className="font-[600] text-sm flex items-center gap-4 p-2 rounded-md hover:bg-[#f4f4f5]  duration-200 "
									>
										{path.icon}
										{path.actionName}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
