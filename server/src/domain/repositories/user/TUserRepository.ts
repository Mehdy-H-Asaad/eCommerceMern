import { User } from "../../entities/user.entity";

export type TUserRepository = {
	create(userData: User): Promise<User>;
	findByEmail(email: string): Promise<User | null>;
	findById(userId: string): Promise<User | null>;
	findByUserName(userName: string): Promise<User | null>;
	addRefreshToken(userId: string, refreshToken: string): Promise<void | null>;
	removeRefreshToken(
		userId: string,
		refreshToken: string
	): Promise<void | null>;
	removeAllRefreshTokens(userId: string): Promise<void | null>;
	findUserByRefreshToken(refreshToken: string): Promise<User | null>;
	save(user: User): Promise<void>;
};
