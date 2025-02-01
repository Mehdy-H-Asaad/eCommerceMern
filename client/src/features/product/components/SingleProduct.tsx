import { useGetSingleProduct } from "../index";
import { Link, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import PageWithLinkToHome from "@/components/PageWithLinkToHome";
import GeneralButton from "@/components/ui/GeneralButton";
import PaymentImg from "../assets/imgs/icon-collection-4.png";
import OnlineSupport from "../assets/imgs/icon-collection-3.png";
import { FaStar } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { formatDiscount } from "../../../utils/formatDiscount";
import { RenderOnAttributes } from "../index";
import { SkeletonCard } from "@/components/SkeletonCard";
// import { PopularProducts } from "../index";
// import { useCartStore } from "@/features/cart/store/cart.store";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/utils/formatCurrency";
import { useAddItemToCart } from "@/features/cart";
import { formateDate } from "@/utils/formateDate";

export const ProductBox = () => {
	const [stars, setStarts] = useState<number>(0);
	const [selectedItemIndexFromChild, setSelectedItemIndexFromChild] =
		useState<number>(0);
	const { id } = useParams<{ id: string }>();

	// const { addItem } = useCartStore();

	if (!id) {
		return <div>Product not found</div>;
	}

	const { singleProductData, isLoadingProduct } = useGetSingleProduct(id);
	const { addItemToCart } = useAddItemToCart();
	const [quantity, setQuantity] = useState<number>(1);

	if (isLoadingProduct)
		return (
			<div className="my-20 mx-auto w-fit">
				<SkeletonCard width="w-[600px]" height="h-[400px]" />;
			</div>
		);

	if (!singleProductData) return <div>Product not found </div>;

	const handleDataFromChild = (index: number) => {
		setSelectedItemIndexFromChild(index);
	};

	const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (/^\d*$/.test(value)) {
			setQuantity(Number(value));
		}
	};

	const handleIncreaseQuantity = () => {
		setQuantity(prev => prev + 1);
	};
	const handleDecreaseQuantity = () => {
		setQuantity(prev => (prev === 1 ? 1 : prev - 1));
	};

	console.log(singleProductData);

	return (
		<div className="mb-20">
			<div className="mb-16">
				<PageWithLinkToHome
					basePath="products"
					specificPath={singleProductData.productName}
					basePathUrl="shop"
				/>
			</div>
			<div className="container px-32">
				<div className="flex flex-col md:flex-row justify-center gap-10">
					<div className="flex-1 min-w-[300px] max-w-[500px]">
						<img
							src={singleProductData.productImage as string}
							className="size-[30rem] object-contain"
							alt=""
						/>
					</div>
					<div className="base flex-1">
						<div className="mb-4 text-xl font-[600]">
							Product by:{" "}
							<Link
								to={`/user/${singleProductData.user._id}`}
								className="text-gray-500 font-bold duration-300 hover:text-black"
							>
								@{singleProductData.user.userName}
							</Link>
						</div>

						<div className="flex items-center justify-between w-full">
							<h1 className="font-[600] text-3xl capitalize">
								{singleProductData.productName}
							</h1>
							<CiHeart size={30} />
						</div>

						<div className="flex items-center justify-between">
							<div className="font-[500] capitalize my-4">
								Category: {singleProductData.category.name}
							</div>
							<div className=" text-green-600 font-bold text-lg capitalize">
								{singleProductData.status}
							</div>
						</div>

						<div className="font-[500] mb-10">
							Posted on:{" "}
							<span className="underline">
								{formateDate(singleProductData.createdAt)}
							</span>
						</div>

						<div className="flex gap-4 p-2 mt-2 mb-6">
							{Array.from({ length: 5 }).map((_, index) => (
								<div key={index} className="flex justify-center">
									<FaStar
										size={14}
										strokeWidth={0}
										fill={index + 1 <= stars ? "gold" : "#D6DBDF"}
										cursor="pointer"
										className="star"
										onClick={() => setStarts(index + 1)}
									/>
								</div>
							))}
						</div>

						<div className="my-5 flex items-center justify-between">
							<div className="text-xl font-[500]">
								{singleProductData.variants[selectedItemIndexFromChild].discount
									?.percentage ? (
									<div className="flex items-center gap-3">
										<span className="line-through text-lg font-[600]">
											{
												singleProductData.variants[selectedItemIndexFromChild]
													.price
											}
											$
										</span>
										<div className="text-green-600 font-bold">
											{formatDiscount(
												singleProductData.variants[selectedItemIndexFromChild]
													.price,
												singleProductData.variants[selectedItemIndexFromChild]
													.discount.percentage
											)}
											$
										</div>
										<div className="bg-black text-white text-sm py-1 px-3 rounded-md">
											-{" "}
											{
												singleProductData.variants[selectedItemIndexFromChild]
													.discount.percentage
											}
											%
										</div>
									</div>
								) : (
									<div className="text-xl font-[600]">
										{formatCurrency(
											singleProductData.variants[selectedItemIndexFromChild]
												.price
										)}
									</div>
								)}
							</div>

							<div className="text-xl font-[500]">
								{singleProductData.variants[selectedItemIndexFromChild].stock
									.quantityLeft ? (
									<span className="text-green-600 font-bold">
										{
											singleProductData.variants[selectedItemIndexFromChild]
												.stock.quantityLeft
										}
									</span>
								) : (
									<span className="text-red-600 font-bold">Out of stock</span>
								)}

								{!singleProductData.variants[selectedItemIndexFromChild].stock
									.quantityLeft
									? ""
									: `${" "} items left`}
							</div>
						</div>

						<RenderOnAttributes
							variants={singleProductData.variants}
							onVariantChange={handleDataFromChild}
						/>

						<div className="font-[600] my-2 text-xl">Description: </div>
						<p className="text-lg mb-10">{singleProductData.description}</p>

						<div className="flex items-center gap-9 ">
							<div className="rounded-md flex items-center border border-[#eeeeee] h-11 bg-white text-black">
								<button
									onClick={handleDecreaseQuantity}
									className="p-4 flex-1 w-12 text-2xl"
								>
									-
								</button>
								<Input
									value={quantity}
									onChange={handleQuantityChange}
									className="w-12 outline-none bg-transparent font-[600] text-lg text-center border-none"
								/>
								<button
									onClick={handleIncreaseQuantity}
									className="flex-1 p-4 w-12 text-2xl"
								>
									+
								</button>
							</div>
							<GeneralButton
								onClick={() =>
									addItemToCart({
										quantity,
										productId: singleProductData._id,
										price:
											singleProductData.variants[selectedItemIndexFromChild]
												.price,
									})
								}
								title={"Add to cart"}
								addClasses="flex-1 !bg-black !text-white"
							/>
						</div>

						<GeneralButton
							title={"Buy now"}
							addClasses="border border-black mt-10"
						/>

						<div className="flex items-center justify-between my-10">
							<div className="flex items-center gap-3">
								<img src={PaymentImg} className="size-14" alt="" />
								<p className="font-[600]">Secure Payment</p>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									<img src={OnlineSupport} className="size-14" alt="" />
									<p className="font-[600]">Online Support</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20">
				{/* <PopularProducts title="Related products" /> */}
			</div>
		</div>
	);
};
