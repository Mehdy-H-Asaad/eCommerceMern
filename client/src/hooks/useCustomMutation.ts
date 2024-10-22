import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCustomMutation = <T, E = Error, K = void>(
	mutationFunction: (payload: K) => Promise<T>,
	queryKey: QueryKey
) => {
	const queryClient = useQueryClient();

	return useMutation<T, E, K>({
		mutationFn: mutationFunction,

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: queryKey });
			toast.success("Success");
		},

		onError: (error: any) => {
			toast.error((error as any).message || "An error occurred");

			// throw error;
		},
	});
};
