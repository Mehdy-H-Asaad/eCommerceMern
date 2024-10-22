import MainTitle from "@/components/MainTitle";
import { DashboardProductsTable } from ".";
import GeneralButton from "@/components/ui/GeneralButton";
import { Link } from "react-router-dom";

export const DashboardListProducts = () => {
	return (
		<div className="flex-1 px-10 pt-10">
			<MainTitle title="List products" addClasses="!text-2xl" />
			<p className="mb-2 text-sm text-muted-foreground">
				Showing all your products
			</p>

			<Link to={"/dashboard/products/create-product"}>
				<GeneralButton
					type="button"
					title="Add new product"
					addClasses="border border-black text-sm mt-4 mb-8"
				/>
			</Link>
			<DashboardProductsTable />
		</div>
	);
};
