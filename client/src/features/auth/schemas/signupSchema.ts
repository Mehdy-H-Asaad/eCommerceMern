import { z } from "zod";

export const signUpSchema = z.object({
	fullName: z.string().min(1, "First name is required"),
	userName: z.string().min(1, "Last name is required"),
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(6, "Password must be at least 6 characters"),
});
