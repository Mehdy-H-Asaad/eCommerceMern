import ErrorResponse from "./Error/errorResponse";
import { FAIL } from "../../shared/constants/HTTP/httpStatusCode";
import User from "../../Infrastructure/database/models/user.model";
import { REQUEST, RESPONSE, NEXT } from "../../shared/types/server";

export const verifyRoles = (...roles: string[]) => {
	return async (req: REQUEST, _res: RESPONSE, next: NEXT) => {
		const reqUserId = req.user;
		console.log(req.user);

		const currentUser = await User.findById(reqUserId);

		if (!currentUser) {
			return next(new ErrorResponse(FAIL, "Token is not valid", 401));
		}

		if (!roles.includes(currentUser.role || ""))
			return next(new ErrorResponse(FAIL, "You are not authorized", 403));

		next();
	};
};
