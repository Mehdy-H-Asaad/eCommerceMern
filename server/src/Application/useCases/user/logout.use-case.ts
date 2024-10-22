import { inject, injectable } from "inversify";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";

@injectable()
export class LogoutUseCase {
	constructor(
		@inject("TUserRepository") private readonly userRepository: TUserRepository
	) {}

	execute = async (refreshToken: string): Promise<void | null> => {
		const foundUser = await this.userRepository.findUserByRefreshToken(
			refreshToken
		);

		if (!foundUser) {
			return null;
		}

		await this.userRepository.removeRefreshToken(
			foundUser._id as string,
			refreshToken
		);
	};
}
