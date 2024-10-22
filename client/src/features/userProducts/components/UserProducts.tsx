import { ProductCard, useGetUserProducts } from "@/features/product";
import defaultUserImg from "../assets/imgs/default-user.png";
import { useParams } from "react-router-dom";
import { useGetSingleUser } from "..";
import MainTitle from "@/components/MainTitle";
import { formatDate } from "../utils/formatDate";
import GeneralButton from "@/components/ui/GeneralButton";
export const UserProducts = () => {
	const { id } = useParams();
	if (!id) return;

	const { userProducts } = useGetUserProducts(id);

	const { singleUserData } = useGetSingleUser(id);

	if (!userProducts) {
		return <div>Loading...</div>;
	}

	if (!singleUserData) return <div>User not found</div>;

	console.log(singleUserData);

	return (
		<div className="py-10 ">
			<div className="container">
				<div className="bg-[#f7f7f8b3] rounded-lg p-10">
					<div className="flex gap-6 ">
						<img
							src={defaultUserImg}
							className="size-12 border border-gray-400 rounded-[50%]"
							alt=""
						/>
						<div className="flex flex-col gap-1">
							<h1 className="font-bold">{singleUserData.fullName}</h1>
							<div className="font-[500]">
								Rating: <span className="text-[#FDCC0D] font-bold">4.7</span> /
								5
							</div>
							<div className="text-gray-500">
								Joined on {formatDate(singleUserData.createdAt)}
							</div>
							<GeneralButton
								title="Chat with seller"
								addClasses="mt-4 border border-black"
							/>
						</div>
						<div className="ml-auto flex flex-col gap-5 font-[500]">
							<div>
								<span className="font-bold">{userProducts.length}</span> items
								in stock
							</div>
							<div>
								<span className="font-bold">25</span> items sold
							</div>
						</div>
					</div>
				</div>
				<div className="mt-20  ">
					<MainTitle
						title={`${singleUserData.fullName.split(" ")[0]}'s items`}
					/>
					<div className="grid grid-cols-4 gap-10 my-10">
						{userProducts.map((item: any) => (
							<ProductCard {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
