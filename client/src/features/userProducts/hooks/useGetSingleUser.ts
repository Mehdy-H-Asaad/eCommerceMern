import { getSingleUserService } from "..";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { TUser } from "@/features/auth";

export const useGetSingleUser = (id: string) => {
	const { data: singleUserData } = useCustomQuery<TUser>(["users"], () =>
		getSingleUserService(id)
	);

	return { singleUserData };
};
