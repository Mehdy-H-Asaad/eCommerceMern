import { SkeletonCard } from "@/components/SkeletonCard";
import { ProductCard } from "@/features/product";
import { useGetProducts } from "@/features/product";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { IoReorderFourOutline, IoReorderThreeOutline } from "react-icons/io5";

export const ShopProducts = () => {
	const { products, isLoadingProducts, isRefetchingProducts } =
		useGetProducts();

	const [productsGrid, setProductsGrid] = useState<string>("4");

	const handleGridClick = (grid: string) => {
		setProductsGrid(grid);
	};

	return (
		<div className="flex-1">
			<div className="flex items-center justify-between mb-10">
				<div className="z-50">
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Sort by" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{/* <SelectLabel>Fruits</SelectLabel> */}
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">Pineapple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex gap-4 items-center">
					<IoReorderThreeOutline
						className="cursor-pointer"
						size={30}
						onClick={() => handleGridClick("3")}
					/>
					<IoReorderFourOutline
						className="cursor-pointer"
						size={30}
						onClick={() => handleGridClick("4")}
					/>
				</div>
			</div>

			{(isRefetchingProducts || isLoadingProducts) && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-10 ">
					{Array.from({ length: 9 }).map(_ => (
						<SkeletonCard width="w-[200px]" height="h-[100px]" />
					))}
					;
				</div>
			)}

			<div
				className={`grid gap-9 ${productsGrid === "3" ? "grid-cols-3" : "grid-cols-4"}`}
			>
				{products?.map(product => <ProductCard {...product} />)}
			</div>
		</div>
	);
};
