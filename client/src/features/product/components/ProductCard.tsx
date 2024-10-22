import { RiShoppingCartLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { TProductDTO } from "..";

export const ProductCard = (product: TProductDTO) => {
	return (
		<Link to={`/products/${product._id}`}>
			<div className="cursor-pointer">
				<div className="relative">
					<img
						src={product.productImage as string}
						className="mb-4  size-[400px] md:size-[300px] mx-auto object-contain"
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

				<h3 className="font-[600] capitalize mb-2 text-lg text-center sm:text-left">
					{product.productName}
				</h3>
				<div className="font-[500] text-[#222222] text-center sm:text-left">
					${product.variants[0].price}
				</div>
			</div>
		</Link>
	);
};
