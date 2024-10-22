import { inject, injectable } from "inversify";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";
import { User } from "../../../domain/entities/user.entity";

@injectable()
export class FindUserUseCase {
	constructor(
		@inject("TUserRepository") private readonly userRepository: TUserRepository
	) {}

	execute = async (id: string): Promise<User | null> => {
		return this.userRepository.findById(id);
	};
}
