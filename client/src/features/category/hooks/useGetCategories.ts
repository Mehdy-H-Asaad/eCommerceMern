import { useCustomQuery } from "@/hooks/useCustomQuery";
import { TCategory } from "@/features/shop";
import { getAllCategoriesService } from "../index";

export const useGetCategories = () => {
	const { data: categories } = useCustomQuery<TCategory[]>(
		["categories"],
		getAllCategoriesService
	);

	return { categories };
};
