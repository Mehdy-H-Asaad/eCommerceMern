import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../auth/index";

export type RESPONSE = Response;
export type REQUEST = AuthenticatedRequest;
export type NEXT = NextFunction;
