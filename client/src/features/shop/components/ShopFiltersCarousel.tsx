import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { useShopfilter } from "../hooks";
import { formatCurrency } from "@/utils/formatCurrency";
import { IoStar } from "react-icons/io5";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export const ShopFiltersCarousel = () => {
	const {
		categories,
		handleParamCategoryClick,
		handleParamConditionClick,
		handleParamDiscountClick,
		conditionStatus,
		handleMaxPriceClick,
	} = useShopfilter();

	const [priceRange, setPriceRange] = useState<number>(0);

	const handleValueChange = (value: number[]) => {
		setPriceRange(value[0]);
	};

	return (
		<div className="flex sm:hidden select-none cursor-grab">
			<Carousel
				opts={{
					align: "start",
					dragFree: true,
				}}
				className="w-full"
			>
				<CarouselContent className="gap-4">
					<CarouselItem className="basis-1/">
						<div>
							<h5 className="font-[600] text-xl mb-4">Category</h5>
							<Select onValueChange={handleParamCategoryClick}>
								<SelectTrigger className="font-[500] w-[180px]">
									<SelectValue placeholder="Select category" />
								</SelectTrigger>
								<SelectContent className="w-96">
									<SelectGroup>
										<SelectLabel>Categories</SelectLabel>
										{categories?.map(category => (
											<SelectItem
												value={category._id}
												className="font-[500] flex items-center gap-2 mb-5 capitalize cursor-pointer"
												key={category._id}
											>
												{category.name}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/">
						<div>
							<h5 className="font-[600] text-xl mb-4">Condition</h5>
							<div className="flex flex-col gap-3">
								{["new", "used"].map(condition => (
									<div className="flex items-center gap-2" key={condition}>
										<Checkbox
											checked={condition === conditionStatus}
											onClick={() => handleParamConditionClick(condition)}
										/>
										<div className="capitalize font-[500]">{condition}</div>
									</div>
								))}
							</div>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/">
						<div>
							<h5 className="font-[600] text-xl mb-4">Discount</h5>
							<div className="flex items-center gap-2 ">
								<Checkbox onClick={handleParamDiscountClick} />
								<div className="capitalize font-[500]">on discount</div>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/">
						<div>
							<h5 className="font-[600] text-xl mb-4">Price range</h5>
							<div className="flex flex-col gap-2">
								<Slider
									onClick={() => handleMaxPriceClick(priceRange)}
									className="cursor-pointer"
									step={500}
									min={0}
									max={10000}
									value={[priceRange]}
									onValueChange={handleValueChange}
								/>
								<div className="font-[600] ">{formatCurrency(priceRange)}</div>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem className="basis-1/">
						<div>
							<h5 className="font-[600] text-xl mb-4">Rating</h5>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Select rating" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Fruits</SelectLabel>
										<SelectItem value="apple">
											<div className="flex">
												{Array.from({ length: 1 }).map((_, index) => (
													<IoStar className="text-yellow-500" key={index} />
												))}
											</div>
										</SelectItem>
										<SelectItem value="banana">
											<div className="flex">
												{Array.from({ length: 2 }).map((_, index) => (
													<IoStar className="text-yellow-500" key={index} />
												))}
											</div>
										</SelectItem>
										<SelectItem value="blueberry">
											<div className="flex">
												{Array.from({ length: 3 }).map((_, index) => (
													<IoStar className="text-yellow-500" key={index} />
												))}
											</div>
										</SelectItem>
										<SelectItem value="grapes">
											<div className="flex">
												{Array.from({ length: 4 }).map((_, index) => (
													<IoStar className="text-yellow-500" key={index} />
												))}
											</div>
										</SelectItem>
										<SelectItem value="pineapple">
											<div className="flex">
												{Array.from({ length: 5 }).map((_, index) => (
													<IoStar className="text-yellow-500" key={index} />
												))}
											</div>
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	);
};
