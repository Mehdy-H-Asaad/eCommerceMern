import { injectable } from "inversify";
import { User } from "../../../domain/entities/user.entity";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";
import UserModel from "../../database/models/user.model";
import { mapToDomainUser } from "../../../shared/helpers/mappers/user/mapToDomainUser";

@injectable()
export class UserRepository implements TUserRepository {
	create = async (userData: User): Promise<User> => {
		const newUser = new UserModel(userData);

		await newUser.save();

		return mapToDomainUser(newUser);
	};

	findByEmail = async (email: string): Promise<User | null> => {
		const user = await UserModel.findOne({ email });

		if (!user) return null;

		return mapToDomainUser(user);
	};
	findById = async (userId: string): Promise<User | null> => {
		const user = await UserModel.findById(userId);

		if (!user) return null;

		return mapToDomainUser(user);
	};

	findByUserName = async (userName: string): Promise<User | null> => {
		const user = await UserModel.findOne({ userName });

		if (!user) return null;

		return mapToDomainUser(user);
	};

	addRefreshToken = async (
		userId: string,
		refreshToken: string
	): Promise<void | null> => {
		const user = await UserModel.findById(userId);

		if (!user) return null;

		user.refreshTokens?.push(refreshToken);
		await user.save();
	};

	findUserByRefreshToken = async (
		refreshToken: string
	): Promise<User | null> => {
		const user = await UserModel.findOne({
			refreshTokens: { $in: refreshToken },
		});

		if (!user) return null;

		return mapToDomainUser(user);
	};

	removeRefreshToken = async (
		userId: string,
		refreshToken: string
	): Promise<void | null> => {
		const user = await UserModel.findById(userId);
		console.log(user);

		if (!user) return null;

		user.refreshTokens = user.refreshTokens?.filter(rt => rt !== refreshToken);

		await user.save();
	};

	removeAllRefreshTokens = async (userId: string): Promise<void | null> => {
		const user = await UserModel.findById(userId);
		if (!user) return null;

		user.refreshTokens = [];

		await user.save();
	};

	save = async (user: User): Promise<void> => {
		try {
			const existingUser = await UserModel.findById(user._id);

			if (!existingUser) {
				throw new Error("User not found");
			}

			// Update the existing user with the new data
			existingUser.userName = user.userName;
			existingUser.fullName = user.fullName;
			existingUser.password = user.password;
			existingUser.email = user.email;
			existingUser.role = user.role;
			existingUser.refreshTokens = user.refreshTokens;
			existingUser.likedItems = user.likedItems;

			// Save the updated user document to the database
			await existingUser.save();
		} catch (error: any) {
			throw new Error(`Error saving user: ${error.message}`);
		}
	};
}
