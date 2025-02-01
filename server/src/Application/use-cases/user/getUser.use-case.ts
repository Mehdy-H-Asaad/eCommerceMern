import { inject, injectable } from "inversify";
import { UserRepository } from "../../../Infrastructure/repositories/user/user.repository";

@injectable()
export class GetUsersUseCase {
	constructor(
		@inject(UserRepository) private readonly userRepository: UserRepository
	) {}

	execute = async () => {
		return await this.userRepository.findAll();
	};
}
