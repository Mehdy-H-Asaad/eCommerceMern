import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getUserProductsService } from "../index";

export const useGetUserProducts = (id: string) => {
	const { data: userProducts } = useCustomQuery(["products", id], () =>
		getUserProductsService(id)
	);

	return { userProducts };
};
