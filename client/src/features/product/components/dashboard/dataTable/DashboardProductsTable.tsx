import { DashboardProductDataTable, DashboardProductsTableColumns } from ".";
import { useAuthUser } from "@/features/auth";
import { useGetUserProducts } from "../../..";

export function DashboardProductsTable() {
	const { authUser } = useAuthUser();

	if (!authUser) {
		return;
	}
	const { userProducts } = useGetUserProducts(authUser._id);

	if (!userProducts) {
		return;
	}

	return (
		// <div className="container mx-auto py-10">
		<DashboardProductDataTable
			columns={DashboardProductsTableColumns}
			data={userProducts}
		/>
		// </div>
	);
}
