import { inject, injectable } from "inversify";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";
import {
	THandleRefreshTokenDTO,
	TLoginUserDTO,
} from "../../DTOs/user/user.dto";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../../../Presentation/lib/utils/Token/generateAccessToken";
import { generateRefreshToken } from "../../../Presentation/lib/utils/Token/generateRefreshToken";
@injectable()
export class LoginUseCase {
	constructor(
		@inject("TUserRepository") private readonly userRepository: TUserRepository
	) {}

	execute = async (
		userData: TLoginUserDTO
	): Promise<THandleRefreshTokenDTO> => {
		if (!userData.email || !userData.password) {
			throw new ErrorResponse(FAIL, "email and password are required", 400);
		}

		const isValidUser = await this.userRepository.findByEmail(userData.email);

		if (!isValidUser) {
			throw new ErrorResponse(FAIL, "Invalid email or password", 404);
		}

		const isValidPassword = await bcrypt.compare(
			userData.password,
			isValidUser.password
		);

		if (!isValidPassword) {
			throw new ErrorResponse(FAIL, "Invalid email or password", 404);
		}

		if (!isValidUser._id) {
			console.log(isValidUser);
			throw new Error();
		}

		const accessToken = generateAccessToken(isValidUser._id.toString());
		const newRefreshToken = generateRefreshToken(isValidUser._id.toString());

		let newRefreshTokensArray = !userData.cookies?.jwt
			? isValidUser.refreshTokens
			: isValidUser.refreshTokens.filter(rt => rt !== userData.cookies.jwt);

		let clearCookie = false;

		if (userData.cookies.jwt) {
			const refreshToken = userData.cookies.jwt;
			const foundToken = await this.userRepository.findUserByRefreshToken(
				refreshToken
			);

			if (!foundToken) {
				console.log("attempted refresh token reuse at login!");
				newRefreshTokensArray = [];
			}
			clearCookie = true;
		}

		isValidUser.refreshTokens = [...newRefreshTokensArray, newRefreshToken];
		await this.userRepository.save(isValidUser);

		return { accessToken, newRefreshToken, clearCookie };
	};
}
