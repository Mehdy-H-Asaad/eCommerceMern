import { getSingleUserService } from "..";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { TUser } from "@/features/auth/types";

export const useGetSingleUser = (id: string) => {
	const { data: singleUserData } = useCustomQuery<TUser>(["users", id], () =>
		getSingleUserService(id)
	);

	return { singleUserData };
};
