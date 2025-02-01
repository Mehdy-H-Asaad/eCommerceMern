import { useGetCategories } from "@/features/category";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useShopfilter = () => {
	const { categories } = useGetCategories();
	const [searchParams, setSearchParams] = useSearchParams();
	const [categoryId, setCategoryId] = useState<string>(
		searchParams.get("category") || ""
	);
	const [conditionStatus, setConditionStatus] = useState<string>(
		searchParams.get("status") || ""
	);
	const [discount, setDiscount] = useState<string>(
		searchParams.get("discount") || ""
	);

	const handleParamCategoryClick = (selectedCategoryId: string) => {
		const newCategoryId =
			categoryId === selectedCategoryId ? "" : selectedCategoryId;
		setCategoryId(newCategoryId);

		updateSearchParams(
			{ category: newCategoryId },
			searchParams,
			setSearchParams
		);
	};

	const handleParamConditionClick = (selectedCondition: string) => {
		const newConditionStatus =
			conditionStatus === selectedCondition ? "" : selectedCondition;
		setConditionStatus(newConditionStatus);
		updateSearchParams(
			{ status: newConditionStatus },
			searchParams,
			setSearchParams
		);
	};

	const handleParamDiscountClick = () => {
		const newDiscount = discount === "true" ? "" : "true";
		setDiscount(newDiscount);
		updateSearchParams(
			{ discount: newDiscount },
			searchParams,
			setSearchParams
		);
	};

	const handleMaxPriceClick = (selectedMaxPrice: number) => {
		updateSearchParams(
			{
				maxPrice: selectedMaxPrice === 0 ? "" : selectedMaxPrice.toString(),
			},
			searchParams,
			setSearchParams
		);
	};

	const handleSearchInput = (searchInput: string) => {
		updateSearchParams({ search: searchInput }, searchParams, setSearchParams);
	};

	return {
		handleParamCategoryClick,
		handleParamDiscountClick,
		categories,
		handleParamConditionClick,
		categoryId,
		conditionStatus,
		handleMaxPriceClick,
		handleSearchInput,
	};
};
