import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export const useCustomQuery = <T>(
	key: QueryKey,
	queryFunction: () => Promise<T>,
	queryOptions?: UseQueryOptions<T, Error>
) => {
	return useQuery<T>({
		queryKey: key,
		queryFn: queryFunction,
		...queryOptions,
	});
};
