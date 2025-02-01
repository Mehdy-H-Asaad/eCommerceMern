import { DataTableOrders } from "./DataTableOrders";
import { ColumnsOrders } from "./ColumnsOrders";
import { useGetOrders } from "@/features/order/hooks/useGetOrders";
import MainTitle from "@/components/MainTitle";

export function ListOrders() {
	// const { authUser } = useAuthUser();

	// if (!authUser) {
	// 	return;
	// }
	// const { userProducts } = useGetUserProducts(authUser._id);

	// if (!userProducts) {
	// 	return;
	// }

	const { orders } = useGetOrders();

	return (
		<div className="flex-1 px-10 pt-10">
			<MainTitle title="List orders" addClasses="!text-2xl" />
			<p className="mb-2 text-sm text-muted-foreground">
				Showing all your orders
			</p>

			{/* <Link to={"/dashboard/products/create-product"}>
				<GeneralButton
					type="button"
					title="Add new product"
					addClasses="border border-black text-sm mt-4 mb-8"
				/>
			</Link> */}
			{!orders ? (
				<div></div>
			) : (
				<DataTableOrders columns={ColumnsOrders} data={orders} />
			)}
		</div>
		// <div className="container mx-auto py-10">

		// </div>
	);
}
