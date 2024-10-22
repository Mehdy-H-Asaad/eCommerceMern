import { useGetProducts } from "@/features/product";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetCategories } from "@/features/product";

export const useShopfilter = () => {
	const { categories } = useGetCategories();
	const { refetchProducts, isRefetchingProducts } = useGetProducts();
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

	const updateSearchParams = (params: Record<string, string>) => {
		const newParams = new URLSearchParams(searchParams.toString());
		Object.entries(params).forEach(([key, value]) => {
			if (value) {
				newParams.set(key, value);
			} else {
				newParams.delete(key);
			}
		});
		setSearchParams(newParams);
	};

	const handleParamCategoryClick = (selectedCategoryId: string) => {
		const newCategoryId =
			categoryId === selectedCategoryId ? "" : selectedCategoryId;
		setCategoryId(newCategoryId);

		updateSearchParams({ category: newCategoryId });
	};

	const handleParamConditionClick = (selectedCondition: string) => {
		const newConditionStatus =
			conditionStatus === selectedCondition ? "" : selectedCondition;
		setConditionStatus(newConditionStatus);
		updateSearchParams({ status: newConditionStatus });
	};

	const handleParamDiscountClick = () => {
		const newDiscount = discount === "true" ? "" : "true";
		setDiscount(newDiscount);
		updateSearchParams({ discount: newDiscount });
	};

	useEffect(() => {
		setSearchParams("");
	}, []);

	useEffect(() => {
		if (!isRefetchingProducts) {
			refetchProducts();
		}
	}, [categoryId, conditionStatus, discount]);

	return {
		handleParamCategoryClick,
		handleParamDiscountClick,
		categories,
		handleParamConditionClick,
		categoryId,
		conditionStatus,
	};
};
