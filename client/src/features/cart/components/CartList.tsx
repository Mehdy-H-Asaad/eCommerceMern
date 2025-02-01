import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartItem } from "./CartItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/utils/formatCurrency";
import { useGetCartItems } from "../hooks";

export const CartList = () => {
	const { cartItems } = useGetCartItems();

	const subTotal: number =
		cartItems?.items.reduce((total, curr) => {
			return total + curr.price * curr.quantity;
		}, 0) || 0;

	return (
		<div>
			<Sheet>
				<SheetTrigger>
					{/* <Button className="bg-transparent border-none text-black p-0 hover:bg-transparent"> */}
					<RiShoppingCartLine size={24} className="cursor-pointer " />
					{/* </Button> */}
				</SheetTrigger>
				<SheetContent className="w-full sm:w-[30rem] !max-w-none">
					<SheetHeader>
						<SheetTitle>Shopping Cart</SheetTitle>
						<SheetDescription>
							Here are all the items you recently added to your shopping cart.
						</SheetDescription>
					</SheetHeader>
					<ScrollArea className="h-[32rem] pr-4">
						<div className="grid gap-4 py-4">
							{cartItems &&
								cartItems.items.map(cartItem => <CartItem {...cartItem} />)}
						</div>
					</ScrollArea>

					<div>
						<div className="flex items-center justify-between mt-6 my-2 ">
							<h1 className="font-[600] uppercase text-lg orbitron">Total</h1>
							<div className="font-[600] text-lg">
								{formatCurrency(subTotal)}
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<Button className="bg-white text-black border border-black hover:bg-black hover:text-white duration-200">
								Check out
							</Button>
							{/* <Link to={"/shop"}>
							<Button className="bg-black text-white border border-black hover:bg-black w-full">
								Continue shopping
							</Button>
						</Link> */}
						</div>
					</div>

					{/* <SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Save changes</Button>
					</SheetClose>
				</SheetFooter> */}
				</SheetContent>
			</Sheet>
		</div>
	);
};
