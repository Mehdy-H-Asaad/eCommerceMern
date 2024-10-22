import { catchError } from "./Error/catchError";
import ErrorResponse from "./Error/errorResponse";
import { FAIL } from "../../shared/constants/HTTP/httpStatusCode";
import { DecodedToken } from "../../shared/types/auth";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { REQUEST, RESPONSE, NEXT } from "../../shared/types/server";

export const verifyJwt = (req: REQUEST, _res: RESPONSE, next: NEXT) => {
	const authHeader = (req.headers["authorization"] ||
		req.headers["Authorization"]) as string;

	if (!authHeader) {
		return next(
			new ErrorResponse(FAIL, "Authorization header is missing", 401)
		);
	}

	const accessToken = authHeader.split(" ")[1];

	try {
		const decodedToken = jwt.verify(
			accessToken,
			process.env.JWT_ACCESS_TOKEN_SECRET as string
		) as DecodedToken;

		if (!decodedToken) {
			throw new ErrorResponse(FAIL, "Not Authorized, Token is not valid", 401);
		}

		req.user = decodedToken.userId;

		next();
	} catch (error: any) {
		if (error.name === "TokenExpiredError") {
			return next(
				new ErrorResponse(FAIL, "Token has expired, please login again", 401)
			);
		}

		if (error instanceof JsonWebTokenError) {
			return next(new ErrorResponse(FAIL, "Token is required", 401));
		}

		if (error instanceof ErrorResponse) {
			return next(error);
		}
		return catchError(error, next, "verify Jwt");
	}
};
