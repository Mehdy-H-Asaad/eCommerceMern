export const cookieOptionsWithMaxAge = {
	httpOnly: true,
	sameSite: "lax" as const,
	secure: false,
	maxAge: 24 * 60 * 60 * 1000,
};

export const cookieOptionsWithoutMaxAge = {
	httpOnly: true,
	sameSite: "lax" as const,
	secure: false,
};
