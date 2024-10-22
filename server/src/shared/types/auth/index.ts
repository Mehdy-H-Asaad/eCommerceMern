export enum ROLES {
	ADMIN = "admin",
	USER = "user",
}
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
	user?: string;
	accessToken?: string;
}
export interface DecodedToken extends JwtPayload {
	userId: string;
}
