export type TUpdateProfileDTO = {
	fullName: string;
	address: string;
	phoneNumber: number;
	email: string;
	profileImg: string;
};

export type TUpdatePasswordDTO = {
	oldPassword: string;
	newPassword: string;
};
