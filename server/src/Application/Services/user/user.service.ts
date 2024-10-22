import { inject, injectable } from "inversify";
import { TUserService } from "../../types/user/TUserService";
import { SignupUseCase } from "../../useCases/user/signup.use-case";
import {
	TCreateUserDTO,
	THandleRefreshTokenDTO,
	TLoginUserDTO,
} from "../../DTOs/user/user.dto";
import { User } from "../../../domain/entities/user.entity";
import { LoginUseCase } from "../../useCases/user/login.use-case";
import { HandleRefreshTokenUseCase } from "../../useCases/user/handleRefreshToken.use-case";
import { FindUserUseCase } from "../../useCases/user/findUser.use-case";
import { LogoutUseCase } from "../../useCases/user/logout.use-case";

@injectable()
export class UserService implements TUserService {
	constructor(
		@inject(SignupUseCase) private signupUseCase: SignupUseCase,
		@inject(LoginUseCase) private readonly loginUseCase: LoginUseCase,
		@inject(HandleRefreshTokenUseCase)
		private readonly handleRefreshTokenUseCase: HandleRefreshTokenUseCase,
		@inject(FindUserUseCase) private readonly findUserUseCase: FindUserUseCase,
		@inject(LogoutUseCase) private readonly logoutUseCase: LogoutUseCase
	) {}

	signup = async (userData: TCreateUserDTO): Promise<User> => {
		return this.signupUseCase.execute(userData);
	};

	login = async (userData: TLoginUserDTO): Promise<THandleRefreshTokenDTO> => {
		return this.loginUseCase.execute(userData);
	};

	handleRefreshToken = (
		refreshToken: string
	): Promise<THandleRefreshTokenDTO> => {
		return this.handleRefreshTokenUseCase.execute(refreshToken);
	};
	findUser = async (id: string): Promise<User | null> => {
		return this.findUserUseCase.execute(id);
	};
	saveUser = async (user: User): Promise<User> => {
		return this.saveUser(user);
	};
	logout = async (refreshToken: string): Promise<void | null> => {
		return this.logoutUseCase.execute(refreshToken);
	};
	// getSingleUser = async (id: string): Promise<User | null> => {
	// 	return this.getSingleUserUseCase.execute(id);
	// };
}
