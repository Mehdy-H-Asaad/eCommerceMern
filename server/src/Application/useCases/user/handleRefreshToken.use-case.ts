import { inject, injectable } from "inversify";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";
import { generateAccessToken } from "../../../Presentation/lib/utils/Token/generateAccessToken";
import { generateRefreshToken } from "../../../Presentation/lib/utils/Token/generateRefreshToken";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import { DecodedToken } from "../../../shared/types/auth";
import jwt from "jsonwebtoken";
import { THandleRefreshTokenDTO } from "../../DTOs/user/user.dto";
@injectable()
export class HandleRefreshTokenUseCase {
	constructor(
		@inject("TUserRepository") private readonly userRepository: TUserRepository
	) {}

	execute = async (refreshToken: string): Promise<THandleRefreshTokenDTO> => {
		const foundUser = await this.userRepository.findUserByRefreshToken(
			refreshToken
		);

		if (!foundUser) {
			const decodedToken = jwt.verify(
				refreshToken,
				process.env.JWT_REFRESH_TOKEN_SECRET as string
			) as DecodedToken;

			if (!decodedToken) {
				throw new ErrorResponse(
					FAIL,
					"Refresh token expired, you are not auhtorized",
					401
				);
			}

			console.log("Attempted refresh token reuse detected");
			const hijackedUser = await this.userRepository.findById(
				decodedToken.userId
			);

			if (!hijackedUser) throw new ErrorResponse(FAIL, "User not found", 404);
			hijackedUser.refreshTokens = [];
			await this.userRepository.save(hijackedUser);

			throw new ErrorResponse(FAIL, "You are not authorized", 401);
		}

		const newRefreshTokensArray = foundUser.refreshTokens.filter(
			rt => rt != refreshToken
		);

		const decodedToken = jwt.verify(
			refreshToken,
			process.env.JWT_REFRESH_TOKEN_SECRET as string
		) as DecodedToken;

		if (!decodedToken) {
			foundUser.refreshTokens = [...newRefreshTokensArray];
			await this.userRepository.save(foundUser);

			throw new ErrorResponse(
				FAIL,
				"Refresh token expired, you are not auhtorized",
				401
			);
		}

		if (foundUser._id?.toString() !== decodedToken.userId)
			throw new ErrorResponse(
				FAIL,
				"You are not authorized, the token is not valid ",
				403
			);

		const accessToken = generateAccessToken(decodedToken.userId);

		const newRefreshToken = generateRefreshToken(decodedToken.userId);

		foundUser.refreshTokens = [...newRefreshTokensArray, newRefreshToken];
		await this.userRepository.save(foundUser);

		return { accessToken, newRefreshToken };
	};
}
