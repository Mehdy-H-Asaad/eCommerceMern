import { DashboardHomeTopProducts } from "@/features/product";
import { DashboardHomeChart, DashboardHomeSummary } from ".";

export const DashboardHome = () => {
	return (
		<div className="flex-1 px-10 pt-10">
			<div>
				<DashboardHomeSummary />
				<div className="flex items-center gap-20 justify-between my-20">
					<DashboardHomeChart />
					<DashboardHomeTopProducts />
				</div>
			</div>
		</div>
	);
};
