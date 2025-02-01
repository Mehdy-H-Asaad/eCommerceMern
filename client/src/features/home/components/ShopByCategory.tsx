import { Link } from "react-router-dom";
import tshirtImg from "../assets/imgs/Oversized Space Back Print T-shirt _ boohooMAN USA.png";
import shoeImg from "../assets/imgs/shoe.jpg";
import watchImg from "../assets/imgs/watch.jpg";
import MainTitle from "@/components/MainTitle";
import { useState } from "react";
import "../assets/styles/shopByCategory.css";
import "@/assets/styles/global.css";
// import { useGetCategories } from "@/features/category";
export const ShopByCategory = () => {
	const [hoverImgIndex, setHoverImgIndex] = useState<number>(0);
	const [imgOpacity, setImgOpacity] = useState<number>(1);

	const imgs: string[] = [tshirtImg, shoeImg, watchImg];

	const categories = [
		{ _id: "679a9dc3d72845d9ad6d7f8b", category: "Clothes" },
		{ _id: "679a9ddbd72845d9ad6d7f8f", category: "shoes" },
		{ _id: "679a9ddfd72845d9ad6d7f91", category: "watches" },
	];

	const handleMouseEnter = (index: number) => {
		setImgOpacity(0);
		setTimeout(() => {
			setHoverImgIndex(index);
			setImgOpacity(1);
		}, 300);
	};

	return (
		<div className="bg-[#222222] my-primary py-primary">
			<MainTitle
				title="Shop by category"
				addClasses="text-white text-center mb-16"
			/>
			<div className="container">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<div className="p-10 flex flex-col gap-20">
						{categories.map((ele, index: number) => {
							return (
								<Link
									key={index}
									to={`/shop/?category=${ele._id}`}
									className={`text-white capitalize font-bold text-2xl sm:text-5xl md:text-7xl orbitron cursor-pointer duration-500 hover:ml-4 link link-white w-fit mx-auto md:mx-0`}
									onMouseEnter={() => handleMouseEnter(index)}
								>
									{ele.category}
								</Link>
							);
						})}
					</div>

					<img
						src={imgs[hoverImgIndex]}
						alt=""
						width={400}
						className={`object-cover transition-all duration-300 updown rounded-md `}
						style={{ opacity: imgOpacity }}
					/>
				</div>
			</div>
		</div>
	);
};
