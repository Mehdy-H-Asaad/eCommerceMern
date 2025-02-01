import { MovingBanner } from "@/components/MovingBanner";
import { OurTeam } from "@/features/about/components/OurTeam";
import {
	FAQs,
	Contact,
	Hero,
	DiscountBanner,
	ShopByCategory,
} from "@/features/home";
import { PopularProducts, MenClothes } from "@/features/product";
import { Electronics } from "@/features/product/components/Electronics";
import { Watches } from "@/features/product/components/Watches";

const Home = () => {
	return (
		<>
			<Hero />
			<div className="flex flex-col container">
				<PopularProducts />
				<MenClothes />
				<Electronics />
				<Watches />
			</div>
			<ShopByCategory />
			<Contact />
			<DiscountBanner />
			<OurTeam />
			<MovingBanner />
			<FAQs />
		</>
	);
};

export default Home;
