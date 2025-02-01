import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getTheAuthUser } from "../index";

export const useAuthUser = () => {
	const { data: authUser } = useCustomQuery(["authUser"], getTheAuthUser);

	return { authUser };
};
