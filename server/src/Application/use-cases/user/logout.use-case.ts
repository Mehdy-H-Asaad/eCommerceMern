import { inject, injectable } from "inversify";
import { UserRepository } from "../../../Infrastructure/repositories/user/user.repository";

@injectable()
export class LogoutUseCase {
	constructor(
		@inject(UserRepository) private readonly userRepository: UserRepository
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
