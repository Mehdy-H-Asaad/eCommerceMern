import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCustomMutation = <T, K>(
	mutationFunction: (payload: T) => Promise<void | K>,
	queryKey: QueryKey,
	toastMessageSuccess?: string,
	toastMessageLoading?: string
) => {
	let loadingToastId: string | undefined;

	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: mutationFunction,
		onMutate: () => {
			if (toastMessageLoading)
				loadingToastId = toast.loading(toastMessageLoading);
		},

		onSuccess: () => {
			toast.dismiss(loadingToastId);
			queryClient.invalidateQueries({ queryKey: queryKey });
			if (toastMessageSuccess) toast.success(toastMessageSuccess);
		},
		onError: (error: any) => {
			toast.dismiss(loadingToastId);
			toast.error(error.message || "Something went wrong.");
		},
	});
};
