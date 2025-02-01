import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TProductDTO } from "../../../types";
import { useDeleteProducts } from "../../../index";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/utils/formatCurrency";

export const ColumnsProducts: ColumnDef<TProductDTO>[] = [
	{
		accessorKey: "productName",
		header: "Product Name",
	},
	{
		accessorKey: "variants",
		header: ({ column }) => {
			return (
				<div className="text-center">
					<Button
						variant="ghost"
						onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
					>
						Product Price
						<ArrowUpDown className="ml-2 h-4 w-4 text-left" />
					</Button>
				</div>
			);
		},
		cell: ({ row }) => {
			const variants = row.original.variants;

			if (
				variants &&
				variants.length > 0 &&
				typeof variants[0].price === "number"
			) {
				const amount = variants[0].price;
				const formatted = formatCurrency(amount);

				return <div className="text-center font-medium">{formatted}</div>;
			}
		},
	},
	{
		accessorKey: "productImage",
		cell: ({ row }) => {
			const imgUrl = row.getValue("productImage") as string;

			return <img src={imgUrl} alt="Img" className="size-20 rounded-md" />;
		},
		header: "Product Image",
	},
	{
		id: "actions",
		header: "Options",
		cell: ({ row }) => {
			const product = row.original;

			const { deleteProduct } = useDeleteProducts();

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>
							<Link to={`/dashboard/products/${product._id}`}>
								Show product info
							</Link>
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => deleteProduct(product._id)}
							className="bg-red-600 text-white hover:!bg-red-600 hover:!text-white cursor-pointer"
						>
							Delete product
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">
							Update product
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
