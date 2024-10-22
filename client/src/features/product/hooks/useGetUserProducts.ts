import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getUserProductsService } from "..";

export const useGetUserProducts = (id: string) => {
	const { data: userProducts } = useCustomQuery(["products"], () =>
		getUserProductsService(id)
	);

	return { userProducts };
};
