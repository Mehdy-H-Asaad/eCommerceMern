import { SkeletonCard } from "@/components/SkeletonCard";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/features/product";
import { useGetProducts } from "@/features/product";
import { IoSearch } from "react-icons/io5";
import { useShopfilter } from "../hooks";
import NoProductsImg from "../assets/imgs/Nothing-here.png";
export const ShopProducts = () => {
	const { products, isLoadingProducts } = useGetProducts({
		limit: 12,
	});

	const { handleSearchInput } = useShopfilter();

	return (
		<div className="flex-1">
			<div className="flex items-center justify-between"></div>

			<div className="flex w-full sm:w-80 mb-14 relative items-center">
				<Input
					onChange={e => handleSearchInput(e.target.value)}
					placeholder="Search products"
					className="pr-10"
				/>
				<IoSearch size={20} className="absolute right-4 cursor-pointer" />
			</div>

			{isLoadingProducts ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-10 ">
					{Array.from({ length: 9 }).map((_, index: number) => (
						<SkeletonCard key={index} width="w-[200px]" height="h-[100px]" />
					))}
				</div>
			) : products && products.length === 0 ? (
				<img
					src={NoProductsImg}
					className="size-72 sm:size-96 mx-auto"
					alt=""
				/>
			) : (
				<div
					className={`gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
				>
					{products &&
						products.map(product => (
							<ProductCard key={product._id} {...product} />
						))}
				</div>
			)}
		</div>
	);
};
