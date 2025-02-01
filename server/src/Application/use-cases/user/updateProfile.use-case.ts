import { inject, injectable } from "inversify";
import { UserRepository } from "../../../Infrastructure/repositories/user/user.repository";
import { TUpdateUserProfileDTO } from "../../DTOs/user/user.dto";
import { TUser } from "../../../domain/entities/user.entity";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
import bcrypt from "bcryptjs";
@injectable()
export class UpdateProfileUseCase {
	constructor(
		@inject(UserRepository) private readonly userRepository: UserRepository
	) {}

	execute = async (data: TUpdateUserProfileDTO): Promise<TUser | null> => {
		let { email, fullName, password } = data;

		if (!email || !fullName || !password) {
			throw new ErrorResponse(FAIL, "All fields are required", 400);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		return this.userRepository.updateProfile({
			...data,
			password: hashedPassword,
		});
	};
}
