import { inject, injectable } from "inversify";
import { SignupUseCase } from "../../use-cases/user/signup.use-case";
import {
	TCreateUserDTO,
	THandleRefreshTokenDTO,
	TLoginUserDTO,
	TUpdateUserProfileDTO,
} from "../../DTOs/user/user.dto";
import { LoginUseCase } from "../../use-cases/user/login.use-case";
import { HandleRefreshTokenUseCase } from "../../use-cases/user/handleRefreshToken.use-case";
import { FindUserUseCase } from "../../use-cases/user/findUser.use-case";
import { LogoutUseCase } from "../../use-cases/user/logout.use-case";
import { GetUsersUseCase } from "../../use-cases/user/getUser.use-case";
import { TUser } from "../../../domain/entities/user.entity";
import { UpdateProfileUseCase } from "../../use-cases/user/updateProfile.use-case";

@injectable()
export class UserService {
	constructor(
		@inject(SignupUseCase) private signupUseCase: SignupUseCase,
		@inject(LoginUseCase) private readonly loginUseCase: LoginUseCase,
		@inject(HandleRefreshTokenUseCase)
		private readonly handleRefreshTokenUseCase: HandleRefreshTokenUseCase,
		@inject(FindUserUseCase) private readonly findUserUseCase: FindUserUseCase,
		@inject(LogoutUseCase) private readonly logoutUseCase: LogoutUseCase,
		@inject(GetUsersUseCase) private readonly getUsersUseCase: GetUsersUseCase,
		@inject(UpdateProfileUseCase)
		private readonly updateProfileUseCase: UpdateProfileUseCase
	) {}

	signup = async (userData: TCreateUserDTO): Promise<TUser> => {
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
	findUser = async (id: string): Promise<TUser | null> => {
		return this.findUserUseCase.execute(id);
	};
	saveUser = async (user: TUser): Promise<TUser> => {
		return this.saveUser(user);
	};
	logout = async (refreshToken: string): Promise<void | null> => {
		return this.logoutUseCase.execute(refreshToken);
	};
	getUsers = async (): Promise<TUser[]> => {
		return this.getUsersUseCase.execute();
	};
	updateUser = async (data: TUpdateUserProfileDTO): Promise<TUser | null> => {
		return this.updateProfileUseCase.execute(data);
	};
}
