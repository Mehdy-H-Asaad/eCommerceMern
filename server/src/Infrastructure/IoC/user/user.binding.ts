import { ContainerModule } from "inversify";
import { UserRepository } from "../../repositories/user/user.repository";
import { UserController } from "../../../Presentation/controllers/user/user.controller";
import { UserService } from "../../../Application/Services/user/user.service";
import { SignupUseCase } from "../../../Application/use-cases/user/signup.use-case";
import { LoginUseCase } from "../../../Application/use-cases/user/login.use-case";
import { HandleRefreshTokenUseCase } from "../../../Application/use-cases/user/handleRefreshToken.use-case";
import { FindUserUseCase } from "../../../Application/use-cases/user/findUser.use-case";
import { LogoutUseCase } from "../../../Application/use-cases/user/logout.use-case";
import { GetUsersUseCase } from "../../../Application/use-cases/user/getUser.use-case";
import { UpdateProfileUseCase } from "../../../Application/use-cases/user/updateProfile.use-case";

const userBinding = new ContainerModule(bind => {
	bind<UserController>(UserController).toSelf();

	bind<UserRepository>(UserRepository).toSelf();
	bind<UserService>(UserService).toSelf();

	bind<SignupUseCase>(SignupUseCase).toSelf();
	bind<LoginUseCase>(LoginUseCase).toSelf();
	bind<HandleRefreshTokenUseCase>(HandleRefreshTokenUseCase).toSelf();
	bind<FindUserUseCase>(FindUserUseCase).toSelf();
	bind<LogoutUseCase>(LogoutUseCase).toSelf();
	bind<GetUsersUseCase>(GetUsersUseCase).toSelf();
	bind<UpdateProfileUseCase>(UpdateProfileUseCase).toSelf();
});

export { userBinding };
