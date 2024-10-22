import { inject, injectable } from "inversify";
import { NEXT, REQUEST, RESPONSE } from "../../../shared/types/server";
import { TUserService } from "../../../Application/types/user/TUserService";
import { FAIL, SUCCESS } from "../../../shared/constants/HTTP/httpStatusCode";
import { catchError } from "../../middlewares/Error/catchError";
import ErrorResponse from "../../middlewares/Error/errorResponse";
import {
	cookieOptionsWithMaxAge,
	cookieOptionsWithoutMaxAge,
} from "../../../shared/constants/cookie/cookieOptions";
// import { TCreateProductDTO } from "../../../Application/DTOs/product/product.dto";
import {
	TCreateUserDTO,
	TLoginUserDTO,
} from "../../../Application/DTOs/user/user.dto";
@injectable()
export class UserController {
	constructor(@inject("TUserService") private userService: TUserService) {}

	singup = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const userData: TCreateUserDTO = req.body;

			const createdUser = await this.userService.signup(userData);

			res.status(201).json({ status: SUCCESS, data: [createdUser] });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "signup");
		}
	};

	login = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		const cookies = req.cookies;

		const loginData: TLoginUserDTO = { ...req.body, cookies };

		try {
			const result = await this.userService.login(loginData);

			if (result instanceof ErrorResponse) {
				return next(result);
			}

			const { accessToken, newRefreshToken, clearCookie } = result;

			// NEED TO CHANGE THE SECURE TO TRUE WHEN I DEPLOY TO PRODUCTION!!!!!!!!!!!!
			if (clearCookie) {
				res.clearCookie("jwt", cookieOptionsWithoutMaxAge);
			}

			return res
				.cookie("jwt", newRefreshToken, cookieOptionsWithMaxAge)
				.status(200)
				.json({ status: SUCCESS, accessToken: accessToken });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "login");
		}
	};
	hanldeRefreshTokenController = async (
		req: REQUEST,
		res: RESPONSE,
		next: NEXT
	) => {
		const cookies = req.cookies;
		if (!cookies?.jwt) {
			return next(new ErrorResponse(FAIL, "You are not authorized", 401));
		}

		try {
			const refreshToken = cookies.jwt;

			res.clearCookie("jwt", {
				httpOnly: true,
				sameSite: "none",
				secure: false,
			});

			const result = await this.userService.handleRefreshToken(refreshToken);

			if (result instanceof ErrorResponse) {
				return next(result.message);
			}

			const { accessToken, newRefreshToken } = result;

			res
				.cookie("jwt", newRefreshToken, cookieOptionsWithMaxAge)
				.status(200)
				.json({ status: SUCCESS, accessToken: accessToken });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "handleRefreshToken");
		}
	};

	logout = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		const cookies = req.cookies;
		try {
			if (!cookies?.jwt) {
				return next(new ErrorResponse(SUCCESS, "No content or payload", 204));
			}

			const refreshToken = cookies.jwt;

			await this.userService.logout(refreshToken);

			res.clearCookie("jwt", cookieOptionsWithoutMaxAge);

			return res
				.status(200)
				.json({ status: SUCCESS, data: "Logged out successfully" });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "logout");
		}
	};

	getTheAuthUser = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const reqUser = req.user;
			if (!reqUser) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}
			const user = await this.userService.findUser(reqUser);

			return res.status(200).json({ status: SUCCESS, data: user });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "getTheAuthUser");
		}
	};

	getSingleUser = async (req: REQUEST, res: RESPONSE, next: NEXT) => {
		try {
			const { id } = req.params;

			const result = await this.userService.findUser(id);

			if (!result) {
				return next(new ErrorResponse(FAIL, "User not found", 404));
			}

			return res.status(200).json({ status: SUCCESS, data: result });
		} catch (error) {
			if (error instanceof ErrorResponse) {
				return next(error);
			}
			return catchError(error, next, "getSingleUser");
		}
	};
}
