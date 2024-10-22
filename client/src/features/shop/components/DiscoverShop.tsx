import { ShopFilters, ShopProducts } from "..";
export const DiscoverShop = () => {
	return (
		<div>
			<div className="container">
				<div className="flex gap-14">
					<ShopFilters />
					<ShopProducts />
				</div>
			</div>
		</div>
	);
};
