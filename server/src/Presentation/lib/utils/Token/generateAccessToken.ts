import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: string) => {
	const accessToken = jwt.sign(
		{ userId },
		process.env.JWT_ACCESS_TOKEN_SECRET as string,
		{
			expiresIn: "15m",
		}
	);
	return accessToken;
};
