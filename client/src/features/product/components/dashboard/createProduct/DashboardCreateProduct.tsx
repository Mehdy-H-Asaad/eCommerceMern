import MainTitle from "@/components/MainTitle";
import { Input } from "@/components/ui/input";
import { IoImageOutline } from "react-icons/io5";
import GeneralButton from "@/components/ui/GeneralButton";
import { DashCreateProductGeneral } from "..";
import { DashCreateProductVariants } from ".";
import { useVariantsStore } from "../../..";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useCreateProductForm } from "../../..";

export const DashboardCreateProduct = () => {
	const { variants } = useVariantsStore();

	const { createdProductForm, handleImgChange, onSubmit, selectedImg } =
		useCreateProductForm();

	return (
		<div className="flex-1 px-10 py-10 ">
			<div className="mb-10">
				<MainTitle title="Create product" addClasses="!text-2xl" />
				<p className="mb-2 text-sm text-muted-foreground">
					Add your product information
				</p>
			</div>
			<Form {...createdProductForm}>
				<form
					onSubmit={createdProductForm.handleSubmit(onSubmit)}
					className="grid grid-cols-2 gap-10"
				>
					<DashCreateProductGeneral form={createdProductForm} />

					<div className="bg-[#f4f4f5] p-5 rounded-md">
						<h3 className="font-[600] text-xl">Upload product image</h3>
						<FormField
							control={createdProductForm.control}
							name="productImage"
							render={({ field }) => (
								<FormItem className="grid w-full max-w-sm items-center gap-1.5 mt-8">
									<FormLabel htmlFor="picture">Picture</FormLabel>
									<FormControl>
										<Input
											{...field}
											id="picture"
											type="file"
											onChange={e => {
												handleImgChange(e), field.onChange(e.target.value);
											}}
											accept="image/*"
										/>
									</FormControl>
									{!selectedImg ? (
										<div className="flex flex-col items-center gap-2 justify-center mt-10">
											<h3 className="font-[500]">Select an image</h3>
											<IoImageOutline size={30} />
										</div>
									) : (
										<img
											src={selectedImg as string}
											alt="Img"
											className="h-64 w-96 object-contain"
										/>
									)}
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<DashCreateProductVariants
						variants={variants}
						form={createdProductForm}
					/>
					<GeneralButton
						type="submit"
						title="Create product"
						addClasses="mt-5 !text-sm border border-black col-span-2"
					/>
				</form>
			</Form>
		</div>
	);
};
