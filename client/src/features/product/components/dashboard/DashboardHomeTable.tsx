import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { INVOICES_DATA, useGetProducts } from "../..";

export function DashboardHomeTable() {
	const { products } = useGetProducts();

	return (
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
				{products?.map(product => (
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
	);
}
