import MainTitle from "@/components/MainTitle";
import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	TableFooter,
} from "@/components/ui/table";
import { useAuthUser } from "@/features/auth";
import { useGetUserProducts } from "@/features/product";

export const DashboardHomeTopProducts = () => {
	const { authUser } = useAuthUser();

	if (!authUser) return;

	const { userProducts } = useGetUserProducts(authUser._id);

	return (
		<div className="flex-[3]">
			<MainTitle title="Top products" addClasses="!text-2xl" />
			<p className="mb-2 text-sm text-muted-foreground">
				Showing most sold products
			</p>

			<Table>
				<TableCaption>A list of your Top products</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Name</TableHead>
						<TableHead>Category</TableHead>
						<TableHead>Image</TableHead>
						<TableHead className="text-right">Reveune</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{userProducts?.map(product => (
						<TableRow>
							<TableCell className="font-medium">
								{product.category.name}
							</TableCell>
							<TableCell>{product.productName}</TableCell>
							<TableCell>
								<img
									className="size-11"
									src={product.productImage as string}
									alt=""
								/>
							</TableCell>
							<TableCell className="text-right">
								{product.variants[0].price}$
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Total</TableCell>
						<TableCell className="text-right">$2,500.00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	);
};
