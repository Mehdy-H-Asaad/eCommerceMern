import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { REVIEWS_DATA } from "../index";
import MainTitle from "@/components/MainTitle";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GeneralButton from "@/components/ui/GeneralButton";
export const DiscountBanner = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number>(0);
	const [_, setCount] = useState<number>(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const handlePaginationClick = (index: number) => {
		if (api) {
			return api.scrollTo(index);
		}
	};

	return (
		<div className="bg-[#222222] my-primary py-primary">
			<MainTitle
				title="Shop Smart, Save More"
				addClasses="text-white text-center"
			/>
			<div className="container">
				{/* <Carousel
					opts={{
						dragFree: false,
					}}
					setApi={setApi}
				> */}
				{/* <CarouselContent> */}
				{/* {REVIEWS_DATA.map(ele => { */}
				{/* return (// <CarouselItem */}
				<div
					// key={ele.id}
					className="text-white mt-5 text-center mx-auto font-[500]"
				>
					{/* <p className=" text-lg sm:text-3xl">{ele.review}</p> */}
					<h5 className=" text-lg text-gray-300  max-w-[40rem] mx-auto">
						Discover discounts and special offers on our curated collection.
						Enjoy quality at great prices while shopping sustainably.
					</h5>
					<Link to={"/shop"} className="mx-auto">
						<GeneralButton
							title="Shop now"
							addClasses="block mx-auto mt-[40px]"
						/>
					</Link>
				</div>
				{/* // </CarouselItem> */}
				{/* ); */}
				{/* })} */}
				{/* </CarouselContent>
				</Carousel> */}
				{/* <Pagination className="mt-16 text-white">
					<PaginationContent className="gap-9">
						{Array.from({ length: 3 }).map((_, index) => {
							return (
								<PaginationItem key={index}>
									<PaginationLink
										className={`cursor-pointer border border-gray-400 ${
											current === index + 1 ? "bg-white text-black" : ""
										}`}
										onClick={() => handlePaginationClick(index)}
									>
										{index + 1}
									</PaginationLink>
								</PaginationItem>
							);
						})}
					</PaginationContent>
				</Pagination> */}
			</div>
		</div>
	);
};
