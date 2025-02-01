import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formateDate } from "@/utils/formateDate";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useUpdateOrder } from "@/features/order/hooks/useUpdateOrder";

export const ColumnsOrders: ColumnDef<any>[] = [
	{
		accessorKey: "buyerId",
		header: "Customer",
		cell: ({ row }) => {
			const buyerName = row.original.buyerId.userName;

			return <div className="font-medium">{buyerName}</div>;
		},
	},

	{
		accessorKey: "productId",
		header: "Product name",
		cell: ({ row }) => {
			const productName = row.original.productId.productName;

			return <div className="font-medium">{productName}</div>;
		},
	},
	{
		accessorKey: "createdAt",
		header: "Date",
		cell: ({ row }) => {
			const date = row.original.createdAt;
			return <div className="font-medium">{formateDate(date)}</div>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.original.status;

			return (
				<div
					className={`font-medium ${status === "Completed" ? "bg-green-600" : status === "Pending" ? "bg-yellow-500" : "bg-red-600"} rounded-lg p-1 w-fit text-white`}
				>
					{status}
				</div>
			);
		},
	},

	{
		id: "actions",
		header: "Options",
		cell: ({ row }) => {
			const orderId = row.original._id;

			const statusSchema = z.object({
				status: z.enum(["Completed", "Pending", "Cancelled"]),
			});

			const statusForm = useForm<z.infer<typeof statusSchema>>({
				resolver: zodResolver(statusSchema),
				defaultValues: {
					status: "Pending",
				},
			});

			const { updateOrder } = useUpdateOrder();

			const onUpdateStatus = (values: z.infer<typeof statusSchema>) => {
				updateOrder();
			};

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
						<DropdownMenuSeparator />
						<Dialog>
							<DialogTrigger asChild>
								<Button>Update order status</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px]">
								<DialogHeader>
									<DialogTitle>Update order status</DialogTitle>
									<DialogDescription>
										Make changes to your order here. Click save when you're
										done.
									</DialogDescription>
								</DialogHeader>
								<Form {...statusForm}>
									<form onSubmit={statusForm.handleSubmit(onUpdateStatus)}>
										<div className="grid gap-4 py-4">
											<FormField
												control={statusForm.control}
												name="status"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Order status</FormLabel>
														<Select
															value={field.value}
															onValueChange={field.onChange}
														>
															<SelectTrigger className="w-[180px]">
																<SelectValue placeholder="Update status" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Status</SelectLabel>
																	{["Pending", "Completed", "Cancelled"].map(
																		status => (
																			<SelectItem value={status}>
																				{status}
																			</SelectItem>
																		)
																	)}
																</SelectGroup>
															</SelectContent>
														</Select>
													</FormItem>
												)}
											/>
										</div>
										<DialogFooter>
											<Button type="submit">Save changes</Button>
										</DialogFooter>
									</form>
								</Form>
							</DialogContent>
						</Dialog>
						{/* <DropdownMenuItem className="cursor-pointer">
							Update order status
						</DropdownMenuItem> */}
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
