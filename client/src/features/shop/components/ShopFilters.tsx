import MainTitle from "@/components/MainTitle";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useShopfilter } from "..";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	// SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const ShopFilters = () => {
	const {
		categories,
		handleParamCategoryClick,
		handleParamConditionClick,
		handleParamDiscountClick,
		// categoryId,
		conditionStatus,
	} = useShopfilter();

	return (
		<div className="mb-20">
			<div className="mb-6">
				<MainTitle title="Filters" />
			</div>

			<div className="flex flex-col gap-8">
				<div>
					<h5 className="font-[600] text-xl mb-4">Category</h5>
					<Select onValueChange={handleParamCategoryClick}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select category" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{categories?.map(category => (
									<SelectItem
										value={category._id}
										className="flex items-center gap-2 mb-5 capitalize cursor-pointer"
										key={category._id}
									>
										{category.name}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div>
					<h5 className="font-[600] text-xl mb-4">Condition</h5>
					{["new", "used"].map(condition => (
						<div className="flex items-center gap-2 mb-5" key={condition}>
							<Checkbox
								checked={condition === conditionStatus}
								onClick={() => handleParamConditionClick(condition)}
							/>
							<div className="capitalize">{condition}</div>
						</div>
					))}
				</div>

				<div>
					<h5 className="font-[600] text-xl mb-4">Discount</h5>
					<div className="flex items-center gap-2 mb-5">
						<Checkbox onClick={handleParamDiscountClick} />
						<div className="capitalize">on discount</div>
					</div>
				</div>

				<div>
					<h5 className="font-[600] text-xl mb-4">Price range</h5>
					<Slider step={1} min={0} max={100} />
				</div>
			</div>
		</div>
	);
};
