import { Link } from "react-router-dom";
import MainTitle from "@/components/MainTitle";

import { BiRightArrowAlt } from "react-icons/bi";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { useGetProducts } from "../hooks/useGetProducts";
import { ProductCard } from "./ProductCard";

import { SkeletonCard } from "@/components/SkeletonCard";

export const Products = ({ title }: { title: string }) => {
	const { products, isLoadingProducts, isRefetchingProducts } =
		useGetProducts();

	return (
		<div>
			<div className="container">
				<div className="flex flex-col gap-3 md:gap-0 md:flex-row items-center justify-between my-14">
					<MainTitle title={title} addClasses="!text-2xl sm:!text-4xl" />
					<Link
						to={"/shop"}
						className="font-[500] text-xl flex items-center gap-2 uppercase link link-black"
					>
						Shop all items
						<BiRightArrowAlt size={20} />
					</Link>
				</div>
				{isLoadingProducts || isRefetchingProducts ? (
					<div className="container grid grid-cols-4 gap-10 py-10">
						{Array.from({ length: 5 }).map(_ => (
							<SkeletonCard width="w-[300]" height="h-[200px]" />
						))}
					</div>
				) : (
					<Carousel opts={{ dragFree: true, align: "start" }}>
						<CarouselPrevious className="hidden sm:flex left-6 size-16 bg-white z-30" />
						<CarouselContent>
							{products &&
								products.map((ele, index) => {
									return (
										<CarouselItem
											key={index}
											className={` sm:basis-1/2 md:basis-1/4 lg:basis-1/5`}
										>
											<ProductCard {...ele} />
										</CarouselItem>
									);
								})}
						</CarouselContent>
						<CarouselNext className="hidden sm:flex right-6 size-16 bg-white z-30" />
					</Carousel>
				)}
			</div>
		</div>
	);
};
