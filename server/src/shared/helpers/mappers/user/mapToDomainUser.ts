import { TUser } from "../../../../Application/types/user/TUserModel";
import { User } from "../../../../domain/entities/user.entity";

export const mapToDomainUser = (userModel: TUser) => {
	return new User(
		userModel.userName,
		userModel.fullName,
		userModel.password,
		userModel.email,
		userModel.role,
		userModel.refreshTokens,
		userModel.likedItems,
		userModel._id.toString(),
		userModel.createdAt
	);
};
