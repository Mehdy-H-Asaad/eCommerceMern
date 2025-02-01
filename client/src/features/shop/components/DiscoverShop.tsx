import { ShopFilters, ShopProducts } from "..";
export const DiscoverShop = () => {
	return (
		<div>
			<div className="container">
				<div className="flex flex-col sm:flex-row gap-0 sm:gap-14 py-primary">
					<ShopFilters />
					<ShopProducts />
				</div>
			</div>
		</div>
	);
};
