import { useAuthUser } from "@/features/auth";
import { useGetUserProducts } from "@/features/product";
import { RiBox3Line } from "react-icons/ri";

export const DashboardHomeSummary = () => {
	const { authUser } = useAuthUser();

	if (!authUser) {
		throw new Error("You are not authenticated");
	}

	const { userProducts } = useGetUserProducts(authUser?._id);

	console.log(userProducts);

	return (
		<div className="bg-gray-300 rounded-md flex flex-col px-4 py-8  ">
			<div className="mb-8">
				<h3 className="font-[600] text-2xl ">Summary</h3>
				<p className="font-[500] text-lg">Your total Information</p>
			</div>
			<div className="grid grid-cols-4 gap-8">
				{Array.from({ length: 4 }).map(_ => (
					<div className="bg-black text-white p-4 rounded-md">
						<div className="flex items-center justify-center gap-8">
							<div>
								<h3 className=" font-[500]">Orders</h3>
								<span className="text-2xl font-bold">
									{userProducts && userProducts.length}
								</span>
							</div>

							<RiBox3Line size={28} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
