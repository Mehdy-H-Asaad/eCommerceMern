import { TUser } from "../../types/user/TUserModel";

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
