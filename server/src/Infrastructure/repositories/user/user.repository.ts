import { injectable } from "inversify";
import UserModel from "../../database/models/user.model";
import { TUser } from "../../../domain/entities/user.entity";
import { TUpdateUserProfileDTO } from "../../../Application/DTOs/user/user.dto";

@injectable()
export class UserRepository {
	findAll = async (): Promise<TUser[]> => {
		const users = await UserModel.find().populate({
			path: "sales",
			populate: {
				path: "buyerId sellerId",
				select: "userName",
			},
		});

		return users.map(user => user.toObject());
	};

	create = async (userData: TUser): Promise<TUser> => {
		const newUser = new UserModel(userData);

		await newUser.save();

		return newUser;
	};

	findByEmail = async (email: string): Promise<TUser | null> => {
		const user = await UserModel.findOne({ email }).select("+password");

		if (!user) return null;

		return user;
	};
	findById = async (userId: string): Promise<TUser | null> => {
		const user = await UserModel.findById(userId).select("-password");

		if (!user) return null;

		return user;
	};

	findByUserName = async (userName: string): Promise<TUser | null> => {
		const user = await UserModel.findOne({ userName });

		if (!user) return null;

		return user;
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
	): Promise<TUser | null> => {
		const user = await UserModel.findOne({
			refreshTokens: { $in: refreshToken },
		});

		if (!user) return null;

		return user;
	};

	removeRefreshToken = async (
		userId: string,
		refreshToken: string
	): Promise<void | null> => {
		const user = await UserModel.findById(userId);
		console.log(user);

		if (!user) return null;

		user.refreshTokens = user.refreshTokens?.filter(
			(rt: string) => rt !== refreshToken
		);

		await user.save();
	};

	removeAllRefreshTokens = async (userId: string): Promise<void | null> => {
		const user = await UserModel.findById(userId);
		if (!user) return null;

		user.refreshTokens = [];

		await user.save();
	};

	updateProfile = async (
		data: TUpdateUserProfileDTO
	): Promise<TUser | null> => {
		const updatedUser = await UserModel.findOneAndUpdate(
			{ _id: data.userId },
			data,
			{ new: true }
		);

		if (!updatedUser) return null;

		return updatedUser;
	};

	save = async (user: TUser): Promise<void> => {
		try {
			const existingUser = await UserModel.findById(user._id);
			// console.log(existingUser);

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
