import { useAuthUser } from "@/features/auth";
import { Link } from "react-router-dom";

export const DashboardNavbar = () => {
	const { authUser } = useAuthUser();

	if (!authUser) {
		return;
	}

	return (
		<nav className="h-24 flex items-center border-b border-gray-200">
			<div className="container">
				<div className="flex items-center justify-between">
					<div>
						<Link
							to={"/"}
							className="orbitron text-4xl font-[700] tracking-wider"
						>
							Souqak
						</Link>
					</div>

					<div>
						<p className="text-black font-[500] text-lg">
							Welcome back {authUser.fullName.split(" ")[0]}👋
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
