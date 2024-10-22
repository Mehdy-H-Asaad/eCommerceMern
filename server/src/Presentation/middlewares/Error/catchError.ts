import { NEXT } from "../../../shared/types/server/index";
import { ERROR } from "../../../shared/constants/HTTP/httpStatusCode";
import ErrorResponse from "./errorResponse";

export const catchError = (error: any, next: NEXT, controller: string) => {
	console.log(`Error in the ${controller} controller`, { error });
	return next(new ErrorResponse(ERROR, "Internal server error", 500));
};
