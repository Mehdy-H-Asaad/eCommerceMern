// import crypto from "crypto";
// import UserModel from "../../../../Infrastructure/database/models/user.model";
import jwt from "jsonwebtoken";
export const generateRefreshToken = (userId: string) => {
	const refreshToken = jwt.sign(
		{ userId },
		process.env.JWT_REFRESH_TOKEN_SECRET as string,
		{
			expiresIn: "1d",
		}
	);

	//  STORE THE HASHED REFRESH TOKEN IN DB BUT WHAT ABOUT USER MODEL
	//  THIS VIOLATES THE SEPERATION OF CONCERNS
	// const hashRefreshToken = crypto
	// 	.createHmac("sha256", process.env.JWT_REFRESH_TOKEN_SECRET as string)
	// 	.update(refreshToken)
	// 	.digest("hex");

	// user.refreshTokens.push({ token: rTknHash });
	// await user.save();

	return refreshToken;
};
