import { User } from "../../../domain/entities/user.entity";
import {
	TCreateUserDTO,
	THandleRefreshTokenDTO,
	TLoginUserDTO,
} from "../../DTOs/user/user.dto";

export type TUserService = {
	saveUser(user: User): Promise<User>;
	findUser(id: string): Promise<User | null>;
	signup(userData: TCreateUserDTO): Promise<User>;
	login(userData: TLoginUserDTO): Promise<THandleRefreshTokenDTO>;
	handleRefreshToken(refreshToken: string): Promise<THandleRefreshTokenDTO>;
	logout(refreshToken: string): Promise<void | null>;
	// getSingleUser(id: string): Promise<User | null>;
};
