import express from "express";
import container from "../../Infrastructure/IoC/container";
import { UserController } from "../controllers/user/user.controller";
import { verifyJwt } from "../middlewares/verifyJwt";

const router = express.Router();

const userController = container.get(UserController);

router.route("/signup").post(userController.singup);

router.route("/login").post(userController.login);

router.route("/refresh").get(userController.hanldeRefreshTokenController);

router.route("/logout").get(userController.logout);

router.route("/getTheAuthUser").get(verifyJwt, userController.getTheAuthUser);

router.route("/getSingleUser/:id").get(userController.getSingleUser);

router.route("/").get(userController.getUsers);
export default router;
