import GeneralButton from "@/components/ui/GeneralButton";
import { Input } from "@/components/ui/input";
import { MdDeleteForever } from "react-icons/md";
import { productSchema, useCreateProductForm } from "@/features/product";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

type TDashCreateProductVariants = {
	form: UseFormReturn<z.infer<typeof productSchema>>;
};

export const DashCreateProductVariants = ({
	form,
}: TDashCreateProductVariants) => {
	const { variants, addVariants, removeVariant } = useCreateProductForm();

	return (
		<div className="bg-[#f4f4f5] p-5 rounded-md mt-10 col-span-2">
			<h3 className="font-[600] text-xl mb-5">Variants</h3>

			{variants.map((_, index) => (
				<div key={index} className="mb-8">
					<MdDeleteForever
						size={24}
						className="mb-2 cursor-pointer text-red-600"
						onClick={() => removeVariant(index)}
					/>
					<div className="grid grid-cols-5 gap-x-5">
						<FormField
							control={form.control}
							name={`variants.${index}.size`}
							render={({ field }) => (
								<FormItem className="grid w-full max-w-sm items-center gap-1.5">
									<FormLabel>Size</FormLabel>
									<FormControl>
										<Input {...field} type="text" placeholder="Size" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={`variants.${index}.colors`}
							render={({ field }) => (
								<FormItem className="grid w-full max-w-sm items-center gap-1.5">
									<FormLabel>Colors</FormLabel>
									<FormControl>
										<Input
											{...field}
											type="text"
											placeholder="Colors"
											onChange={e => {
												const inputValue = e.target.value;
												const colorsArray = inputValue.split(" ");
												field.onChange(colorsArray);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name={`variants.${index}.stock.quantityLeft`}
							render={({ field }) => (
								<FormItem className="grid w-full max-w-sm items-center gap-1.5">
									<FormLabel
										className={`${form.formState.errors.variants?.[index]?.stock ? "text-destructive" : ""}`}
									>
										Stock
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											onChange={e => {
												if (/^\d*$/.test(e.target.value)) {
													field.onChange(Number(e.target.value));
												}
											}}
											type="text"
											placeholder="Stock"
										/>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={`variants.${index}.price`}
							render={({ field }) => (
								<FormItem className="grid w-full max-w-sm items-center gap-1.5">
									<FormLabel
										className={`${form.formState.errors.variants?.[index]?.price ? "text-destructive" : ""}`}
									>
										Price
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											onChange={e => {
												if (/^\d*$/.test(e.target.value))
													field.onChange(Number(e.target.value));
											}}
											type="text"
											placeholder="Price"
										/>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name={`variants.${index}.discount.percentage`}
							render={({ field }) => (
								<FormItem className="grid w-full max-w-sm items-center gap-1.5">
									<FormLabel>Discount</FormLabel>
									<FormControl>
										<Input
											{...field}
											onChange={e => {
												if (/^\d*$/.test(e.target.value))
													field.onChange(Number(e.target.value));
											}}
											type="text"
											placeholder="Percentage"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
			))}
			<GeneralButton
				type="button"
				title="Add new variant"
				addClasses="mt-5 !text-sm"
				onClick={() => {
					addVariants({
						colors: [],
						discount: { percentage: 0 },
						price: 0,
						size: "",
						stock: { quantityLeft: 0 },
					});
				}}
			/>
		</div>
	);
};
