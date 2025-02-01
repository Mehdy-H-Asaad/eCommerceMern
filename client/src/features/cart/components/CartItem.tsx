// import { Button } from "@/components/ui/button";
import { TGetCartItemsDTO } from "../types";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/utils/formatCurrency";
import { IoMdTrash } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { useDeleteItemFromCart } from "../hooks";
import { useUpdateItemQuantity } from "../hooks/useUpdateItemQuantity";

export const CartItem = (cartItemData: TGetCartItemsDTO) => {
	const { deleteItemFromCart } = useDeleteItemFromCart();
	const [updatedQuantity, setUpdatedQuantity] = useState<number>(
		cartItemData.quantity
	);
	const { updateQuantity, isUpdating } = useUpdateItemQuantity();

	// const handleUpdatedQuantityIncrease = async () => {
	// 	const newQuantity = updatedQuantity + 1;
	// 	setUpdatedQuantity(newQuantity);
	// 	updateQuantity({
	// 		productId: cartItemData.productId._id,
	// 		quantity: newQuantity,
	// 	});
	// };

	// const handleUpdatedQuantityDecrease = () => {
	// 	const newQuantity = updatedQuantity < 1 ? 1 : updatedQuantity - 1;
	// 	setUpdatedQuantity(newQuantity);
	// 	updateQuantity({
	// 		productId: cartItemData.productId._id,
	// 		quantity: newQuantity,
	// 	});
	// };

	const handleUpdateQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (/^\d*$/.test(value)) {
			const newQuantity = Number(value);
			setUpdatedQuantity(newQuantity);
		}
	};

	const handleUpdateQuantityBlur = () => {
		// const { value } = e.target;

		if (updatedQuantity !== cartItemData.quantity) {
			updateQuantity({
				productId: cartItemData.productId._id,
				quantity: updatedQuantity,
			});
		}

		// if (/^\d*$/.test(value)) {
		// 	const newQuantity = Number(value);
		// 	setUpdatedQuantity(newQuantity);
		// 	updateQuantity({
		// 		productId: cartItemData.productId._id,
		// 		quantity: newQuantity,
		// 	});
		// }
	};

	return (
		<div className="flex gap-4 mt-6">
			<img
				className="size-28 object-contain border border-black p-1 rounded-md"
				src={cartItemData.productId.productImage as string}
				alt=""
			/>

			<div className="flex-1">
				<div className="flex flex-col flex-1">
					<div className="flex justify-between flex-wrap">
						<h1 className="font-[600] flex-1 w-36 ">
							{cartItemData.productId.productName}
						</h1>
						<div className="font-[700]">
							{formatCurrency(cartItemData.price)}
						</div>
					</div>
					<div className="text-sm font-[500] text-gray-600">
						{cartItemData.productId.category.name}
					</div>
				</div>

				<div className="flex items-center justify-between mt-6">
					<div className="flex items-center w-28 gap-2">
						<div className="text-sm text-gray-500">Qty: </div>
						{/* <Button
							disabled={isUpdating}
							onClick={handleUpdatedQuantityIncrease}
							className="size-8 bg-transparent border border-black hover:bg-transparent text-black"
						>
							+
						</Button> */}
						<Input
							disabled={isUpdating}
							onChange={handleUpdateQuantityChange}
							onBlur={handleUpdateQuantityBlur}
							className="w-14 h-8 bg-transparent border border-black hover:bg-transparent text-black font-[500] text-center"
							value={updatedQuantity}
						/>
						{/* <Button
							disabled={isUpdating}
							onClick={handleUpdatedQuantityDecrease}
							className="size-8 bg-transparent border border-black hover:bg-transparent text-black"
						>
							-
						</Button> */}
					</div>

					<IoMdTrash
						onClick={() => deleteItemFromCart(cartItemData.productId._id)}
						size={24}
						className="text-black hover:text-red-600 duration-200 cursor-pointer  "
					/>
				</div>
			</div>
		</div>
	);
};
