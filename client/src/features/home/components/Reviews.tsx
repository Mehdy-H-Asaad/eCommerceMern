import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { REVIEWS_DATA } from "..";
import MainTitle from "@/components/MainTitle";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
export const Reviews = () => {
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
		<div className="bg-[#222222] mt-20 py-20">
			<MainTitle title="Reviews" addClasses="text-white text-center" />
			<div className="container">
				<Carousel
					opts={{
						dragFree: false,
					}}
					setApi={setApi}
				>
					<CarouselContent>
						{REVIEWS_DATA.map(ele => {
							return (
								<CarouselItem
									key={ele.id}
									className="text-white mt-10 text-center mx-auto font-[500]"
								>
									<p className=" text-lg sm:text-3xl">{ele.review}</p>
									<h5 className="orbitron mt-8 text-2xl text-gray-400 border-b-[1px] border-gray-400 w-fit mx-auto">
										{ele.user}
									</h5>
								</CarouselItem>
							);
						})}
					</CarouselContent>
				</Carousel>

				<Pagination className="mt-16 text-white">
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
				</Pagination>
			</div>
		</div>
	);
};
