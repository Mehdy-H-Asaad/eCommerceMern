import MainTitle from "@/components/MainTitle";
import { DashboardHomeTable } from ".";

export const DashboardHomeTopProducts = () => {
	return (
		<div className="flex-[3]">
			<MainTitle title="Top products" addClasses="!text-2xl" />
			<p className="mb-2 text-sm text-muted-foreground">
				Showing most sold products
			</p>

			<DashboardHomeTable />
		</div>
	);
};
