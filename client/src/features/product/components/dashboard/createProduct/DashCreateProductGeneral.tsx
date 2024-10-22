import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useGetCategories } from "@/features/product";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { createdProductSchema } from "@/features/product/schema/createdProductSchema";

type TDashCreateProductGeneral = {
	form: UseFormReturn<z.infer<typeof createdProductSchema>>;
};

export const DashCreateProductGeneral = ({
	form,
}: TDashCreateProductGeneral) => {
	const { categories } = useGetCategories();

	return (
		<div className="bg-[#f4f4f5] p-5 rounded-md h-fit">
			<h3 className="font-[600] text-xl">General Information</h3>
			<div>
				<FormField
					control={form.control}
					name="productName"
					render={({ field }) => (
						<FormItem className="grid w-full max-w-sm items-center gap-1.5 mt-8">
							<FormLabel htmlFor="name">Product name</FormLabel>
							<FormControl>
								<Input
									{...field}
									type="text"
									id="productName"
									placeholder="Your product name"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="grid w-full gap-1.5 mt-8">
							<FormLabel htmlFor="description">Product description</FormLabel>
							<FormControl>
								<Textarea
									{...field}
									placeholder="Tell us about your product."
									id="description"
								></Textarea>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid w-full gap-1.5 mt-8">
					<Label htmlFor="condition">Condition</Label>
					<div className="flex items-center gap-8">
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem className="flex items-center gap-2 mt-3 ">
									<FormControl>
										<Checkbox
											checked={field.value === "new"}
											onCheckedChange={() => field.onChange("new")}
										/>
									</FormControl>
									<FormLabel className="!mt-0" htmlFor="new">
										New
									</FormLabel>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem className="flex items-center gap-2 mt-3">
									<FormControl>
										<Checkbox
											checked={field.value === "used"}
											onCheckedChange={() => field.onChange("used")}
										/>
									</FormControl>
									<FormLabel htmlFor="used">Used</FormLabel>

									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="category.name"
					render={({ field }) => (
						<FormItem className="grid w-full max-w-sm items-center gap-1.5 mt-8">
							<FormLabel htmlFor="category">Category</FormLabel>
							<FormControl>
								<Select
									{...field}
									onValueChange={value => {
										const selectedCategory = categories?.find(
											category => category._id === value
										);

										if (selectedCategory) {
											form.setValue("category._id", selectedCategory._id);
											form.setValue("category.name", selectedCategory.name);
											form.clearErrors("category.name");
										}
									}}
									value={form.getValues("category._id")}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select a category" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Category</SelectLabel>
											{categories &&
												categories.map(category => (
													<SelectItem
														key={category._id}
														className="capitalize"
														value={category._id}
													>
														{category.name}
													</SelectItem>
												))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</div>
	);
};
