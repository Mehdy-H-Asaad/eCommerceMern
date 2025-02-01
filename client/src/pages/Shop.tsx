import { DiscoverShop } from "../features/shop";
import { PageBanner } from "@/components/PageBanner";
const Shop = () => {
	return (
		<>
			<PageBanner currentPage="Shop" />
			<DiscoverShop />
		</>
	);
};

export default Shop;
