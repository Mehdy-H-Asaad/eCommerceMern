import { Link } from "react-router-dom";
import "../assets/styles/hero.css";
import Button from "@/components/ui/GeneralButton";
export const Hero = () => {
	return (
		<div className="hero-bg flex items-center justify-center">
			<div className="container">
				<div className="text-center flex flex-col gap-5">
					<h1 className="orbitron font-bold text-white text-5xl md:text-7xl">
						Welcome to Souqak
					</h1>
					<p className="text-white text-xl">
						Discover Quality & Value at Souqak - Your Ultimate Shopping
						Destination!
					</p>
				</div>
				<Link to={"/shop"} className="mx-auto">
					<Button title="Shop now" addClasses="block mx-auto mt-[40px]" />
				</Link>
			</div>
		</div>
	);
};
