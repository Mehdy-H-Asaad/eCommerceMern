export const formatDate = (date: string) => {
	const joinedAt = new Date(date);

	const day = joinedAt.getUTCDate();
	const monthName = joinedAt.toLocaleString("en-US", { month: "long" });
	const year = joinedAt.getUTCFullYear();

	const fomrattedDate = `${monthName} ${day}, ${year}`;

	return fomrattedDate;
};
