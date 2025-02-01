import { z } from "zod";

export const profileSchema = z.object({
	fullName: z.string(), //min(1, "Full name is required")
	profileImg: z.string(),
	// birth: z.date(),
	address: z.string().optional(),
	phoneNumber: z.number().optional(),
	email: z.string().email().min(1, "Email is required"),
	oldPassword: z.string().min(1, "old Password is required"),
	newPassword: z.string(),
});
