import MainTitle from "@/components/MainTitle";

import { useParams } from "react-router-dom";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import GeneralButton from "@/components/ui/GeneralButton";
import { useAttributesChange } from "@/features/product/hooks/form/useAttributesChange";
import { DashProductInfogeneral } from "./DashProductInfogeneral";

import { TVariants } from "@/features/product/types";
import { MdDeleteForever } from "react-icons/md";
import { useVariantsStore } from "@/features/product";

export const DashProductInfo = () => {
	const { id } = useParams();
	if (!id) {
		return <div>id is missing</div>;
	}

	const { addVariants, removeVariant, variants } = useVariantsStore();

	// const handleVariantChange = (
	// 	index: number,
	// 	field: keyof TVariants,
	// 	value: TVariants[keyof TVariants]
	// ) => {
	// 	updateVariant(index, field, value);
	// };

	const {
		singleProductData,
		updatedProductDetails,
		isLoadingProduct,
		handleImgChange,
	} = useAttributesChange(id);

	if (isLoadingProduct) {
		return <div>Loading...</div>;
	}

	if (!singleProductData) {
		return <div>Product not found</div>;
	}

	return (
		<div className="px-10 py-10 flex-1">
			<MainTitle title="Product Details" addClasses="!text-2xl" />
			<p className="mb-2 text-sm text-muted-foreground">
				Showing your product's details
			</p>

			<div className="py-10 grid grid-cols-1 gap-10">
				<DashProductInfogeneral id={id} />
			</div>
			<div className="bg-[#f4f4f5] p-5 rounded-md">
				<h3 className="font-[600] text-xl">Upload product image</h3>
				<div className="grid w-full max-w-sm items-center gap-1.5 mt-8">
					<Label htmlFor="picture">Picture</Label>
					<Input
						id="picture"
						type="file"
						onChange={handleImgChange}
						accept="image/*"
					/>

					<img
						src={updatedProductDetails.productImage as string}
						alt="Img"
						className="h-64 w-96 object-contain"
					/>
				</div>
			</div>

			{/*  */}

			<div className="bg-[#f4f4f5] p-5 rounded-md mt-10 col-span-2">
				<h3 className="font-[600] text-xl mb-5">Variants</h3>

				{variants.map((variant, index) => (
					<div key={index} className="mb-8">
						<MdDeleteForever
							size={24}
							className="mb-2 cursor-pointer text-red-600"
							onClick={() => removeVariant(index)}
						/>
						<div className="grid grid-cols-5 gap-x-5">
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor={`size-${index}`}>Size</Label>
								<Input
									type="text"
									id={`size-${index}`}
									placeholder="L"
									value={variant.size}
									onChange={e =>
										handleVariantChange(index, "size", e.target.value)
									}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor={`color-${index}`}>Colors</Label>
								<Input
									type="text"
									id={`color-${index}`}
									placeholder="Red, Green ..."
									value={variant.colors?.join(", ")} // Convert array to comma-separated string
									onChange={e =>
										handleVariantChange(
											index,
											"colors",
											e.target.value.split(", ").map(color => color.trim())
										)
									}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor={`stock-${index}`}>Stock</Label>
								<Input
									type="number"
									id={`stock-${index}`}
									placeholder="15"
									value={variant.stock?.quantityLeft || 0}
									onChange={e =>
										handleVariantChange(index, "stock", {
											quantityLeft: Number(e.target.value),
										})
									}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor={`price-${index}`}>Price</Label>
								<Input
									type="number"
									id={`price-${index}`}
									placeholder="200"
									value={variant.price || 0}
									onChange={e =>
										handleVariantChange(index, "price", Number(e.target.value))
									}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor={`discount-percentage-${index}`}>Discount</Label>
								<Input
									type="number"
									id={`discount-percentage-${index}`}
									placeholder="50"
									value={variant.discount?.percentage || 0}
									onChange={e =>
										handleVariantChange(index, "discount", {
											percentage: Number(e.target.value),
											validFrom: variant.discount?.validFrom || new Date(),
											validUntil: variant.discount?.validUntil || new Date(),
										})
									}
								/>
							</div>
						</div>
					</div>
				))}

				<GeneralButton
					title="Add new variant"
					addClasses="mt-5 !text-sm"
					onClick={() => addVariants()}
				/>
			</div>

			<GeneralButton
				type="submit"
				title="Update product"
				addClasses="mt-5 !text-sm border border-black col-span-2"
			/>
		</div>
	);
};
