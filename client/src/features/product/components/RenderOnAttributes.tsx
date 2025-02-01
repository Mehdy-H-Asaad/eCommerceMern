import { useState } from "react";
import { TVariants } from "../types";

type TRenderOnAttributes = {
	variants: TVariants[];
	onVariantChange: (variant: number) => void;
};

export const RenderOnAttributes = ({
	variants,
	onVariantChange,
}: TRenderOnAttributes) => {
	const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
	const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

	const handleColorClick = (index: number) => {
		setSelectedColorIndex(index);
	};

	const handleItemClick = (index: number) => {
		setSelectedItemIndex(index);
		onVariantChange(index);
	};

	return (
		<>
			<div className="font-[600] mb-4 capitalize">
				{!variants[selectedItemIndex].size
					? ""
					: `Size: ${variants[selectedItemIndex].size}`}
			</div>
			<div className="flex items-center gap-5">
				{variants.map((ele: TVariants, index: number) => {
					return (
						<div
							className={`${!ele.size ? "hidden" : ""} mb-10 duration-200 cursor-pointer py-3 px-5 rounded-md font-[500] text-sm ${selectedItemIndex === index ? "bg-black text-white" : "text-black"} border border-black `}
							onClick={() => handleItemClick(index)}
						>
							{ele.size}
						</div>
					);
				})}
			</div>
			<div
				className={`${
					variants[selectedItemIndex].colors &&
					!variants[selectedItemIndex].colors[selectedColorIndex]
						? ""
						: "mb-10"
				}`}
			>
				<div className="font-[600] capitalize">
					{variants[selectedItemIndex].colors &&
						(!variants[selectedItemIndex].colors[selectedColorIndex]
							? ""
							: `Color: ${variants[selectedItemIndex].colors[selectedColorIndex]}`)}
				</div>
				<div className="flex items-center gap-5 mt-6">
					{variants[selectedItemIndex].colors?.map(
						(ele: string, index: number) => {
							return (
								<div
									className={`${!ele ? "hidden" : ""} duration-200 ${index === selectedColorIndex ? "bg-white border border-" : ""} rounded-[50%] p-1 `}
								>
									<div
										onClick={() => {
											handleColorClick(index);
										}}
										className={`rounded-[50%] size-6 p-2 text-w  `}
										style={{ backgroundColor: ele.toLowerCase() }}
									></div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</>
	);
};
