import { TUser } from "../../../domain/entities/user.entity";

export type TCreateUserDTO = Omit<TUser, "likedItems">;

export type TLoginUserDTO = Omit<TUser, "userName" | "fullName" | "role"> & {
	cookies: any;
};

export type THandleRefreshTokenDTO = {
	newRefreshToken: string;
	accessToken: string;
	clearCookie?: boolean;
};

export type TLoginAccessTokenDTO = {
	accessToken: string;
};

export type TUpdateUserProfileDTO = Pick<
	TUser,
	"fullName" | "password" | "address" | "phoneNumber" | "email" | "profileImg"
> & { userId: string };
