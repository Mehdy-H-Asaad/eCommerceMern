export const formatDiscount = (
	originalPrice: number,
	discountPercentage: number
) => {
	const result = originalPrice * (discountPercentage / 100);

	return result;
};
