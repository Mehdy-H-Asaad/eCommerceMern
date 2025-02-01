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
// import { useAttributesChange } from "../../..";

export const DashProductInfogeneral = ({ id }: { id: string }) => {
	// const {
	// 	categories,
	// 	handleCategoryChange,
	// 	handleInputChange,
	// 	updatedProductDetails,
	// 	handleStatusChange,
	// } = useAttributesChange(id);

	return (
		<div>
			<div className="bg-[#f4f4f5] p-5 rounded-md h-fit">
				<h3 className="font-[600] text-xl">General Information</h3>
				<div>
					<div className="grid w-full max-w-sm items-center gap-1.5 mt-8">
						<Label htmlFor="name">Product name</Label>
						<Input
							value={updatedProductDetails.productName}
							type="text"
							id="productName"
							placeholder="Your product name"
							onChange={handleInputChange}
						/>
					</div>

					<div className="grid w-full gap-1.5 mt-8">
						<Label htmlFor="description">Product description</Label>
						<Textarea
							value={updatedProductDetails.description}
							placeholder="Tell us about your product."
							id="description"
							onChange={handleInputChange}
						/>
					</div>

					<div className="grid w-full gap-1.5 mt-8">
						<Label htmlFor="condition">Condition</Label>
						<div className="flex items-center gap-8">
							<div className="flex items-center gap-2 mt-3">
								<Checkbox
									checked={updatedProductDetails.status === "new"}
									onCheckedChange={() => handleStatusChange("new")}
									id="new"
								/>
								<Label htmlFor="new">New</Label>
							</div>
							<div className="flex items-center gap-2 mt-3">
								<Checkbox
									checked={updatedProductDetails.status === "used"}
									onCheckedChange={() => handleStatusChange("used")}
									id="used"
								/>
								<Label htmlFor="used">Used</Label>
							</div>
						</div>
					</div>

					<div className="grid w-full max-w-sm items-center gap-1.5 mt-8">
						<Label htmlFor="category">Category</Label>
						<Select
							value={updatedProductDetails.category._id}
							onValueChange={handleCategoryChange}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue
									placeholder={updatedProductDetails.category.name}
								/>
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
					</div>
				</div>
			</div>
		</div>
	);
};
