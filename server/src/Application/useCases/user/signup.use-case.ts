import { inject, injectable } from "inversify";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";
import { TCreateUserDTO } from "../../DTOs/user/user.dto";
import { User } from "../../../domain/entities/user.entity";
import bcrypt from "bcryptjs";
import ErrorResponse from "../../../Presentation/middlewares/Error/errorResponse";
import { FAIL } from "../../../shared/constants/HTTP/httpStatusCode";
@injectable()
export class SignupUseCase {
	constructor(
		@inject("TUserRepository") private userRepository: TUserRepository
	) {}

	execute = async (userData: TCreateUserDTO): Promise<User> => {
		if (
			!userData.userName ||
			!userData.email ||
			!userData.password ||
			!userData.fullName
		) {
			throw new ErrorResponse(FAIL, "Missing required fields", 400);
		}

		const existingUser = await this.userRepository.findByUserName(
			userData.userName
		);
		if (existingUser) {
			throw new ErrorResponse(FAIL, "Username already exists", 400);
		}

		const existingEmail = await this.userRepository.findByEmail(userData.email);
		if (existingEmail) {
			throw new ErrorResponse(FAIL, "Email already exists", 400);
		}

		if (userData.password.length < 6) {
			throw new ErrorResponse(
				FAIL,
				"Password must be at least 6 characters",
				400
			);
		}

		const hashedPassword = await bcrypt.hash(userData.password, 10);

		const newUser = new User(
			userData.userName,
			userData.fullName,
			hashedPassword,
			userData.email,
			userData.role
		);

		return this.userRepository.create(newUser);
	};
}
