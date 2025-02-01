import { SetURLSearchParams } from "react-router-dom";

export const updateSearchParams = (
	params: Record<string, string>,
	searchParams: URLSearchParams,
	setSearchParams: SetURLSearchParams
) => {
	const newParams = new URLSearchParams(searchParams.toString());

	Object.entries(params).forEach(([key, value]) => {
		if (value) {
			newParams.set(key, value);
		} else {
			newParams.delete(key);
		}
	});

	setSearchParams(newParams);
};
