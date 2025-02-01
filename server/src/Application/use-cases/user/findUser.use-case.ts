import { inject, injectable } from "inversify";
import { UserRepository } from "../../../Infrastructure/repositories/user/user.repository";
import { TUser } from "../../../domain/entities/user.entity";

@injectable()
export class FindUserUseCase {
	constructor(
		@inject(UserRepository) private readonly userRepository: UserRepository
	) {}

	execute = async (id: string): Promise<TUser | null> => {
		return this.userRepository.findById(id);
	};
}
