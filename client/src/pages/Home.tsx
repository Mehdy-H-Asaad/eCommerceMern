import {
	AccordionSection,
	Contact,
	Hero,
	Reviews,
	ShopByCategory,
} from "@/features/home";
import { Products, NewProducts } from "@/features/product";

const Home = () => {
	return (
		<>
			<Hero />
			<div className="flex flex-col">
				<Products title="Popular Products" />
				<NewProducts />
			</div>
			<ShopByCategory />
			<Contact />
			<Reviews />
			<AccordionSection />
		</>
	);
};

export default Home;
