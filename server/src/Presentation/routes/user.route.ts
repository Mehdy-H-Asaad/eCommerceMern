import { Router } from "express";
import container from "../../Infrastructure/IoC/container";
import { UserController } from "../controllers/user/user.controller";
import { verifyJwt } from "../middlewares/verifyJwt";

const router = Router();

const userController = container.get<UserController>(UserController);

router.route("/profile/settings").put(verifyJwt, userController.updateProfile);
router.route("/send-email").post(userController.sendEmail);
export default router;
