import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getTheAuthUser } from "..";

export const useAuthUser = () => {
	const { data: authUser } = useCustomQuery(["authUser"], getTheAuthUser);

	return { authUser };
};
