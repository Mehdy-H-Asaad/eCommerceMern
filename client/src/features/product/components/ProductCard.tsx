import { RiShoppingCartLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TProductDTO } from "../types";

export const ProductCard = (product: TProductDTO) => {
	return (
		<Link to={`/products/${product._id} `} className="">
			<div className="relative duration-500 hover:scale-95 rounded-lg ">
				<img
					src={product.productImage as string}
					className="size-[250px] mx-auto object-contain rounded-lg"
					alt="product"
				/>
				<div className="duration-500 absolute bottom-0 opacity-0 hover:bottom-6 hover:opacity-100 gap-3 left-0 flex items-end justify-center size-full">
					<div className="bg-black p-3 rounded-[50%]">
						<RiShoppingCartLine size={25} color="white" />
					</div>
					<div className="bg-black p-3 rounded-[50%]">
						<CiHeart size={25} color="white" />
					</div>
				</div>
			</div>
			<div className="p-2 ">
				<h3 className="font-[500] capitalize mb-2 text-center sm:text-left break-words whitespace-nowrap overflow-hidden text-ellipsis">
					{product.productName}
				</h3>
				<div className="text-lg text-[#222222] text-center sm:text-left font-[600]">
					${product.variants[0].price}
				</div>
			</div>
		</Link>
	);
};
