import { ContainerModule } from "inversify";
import { TUserRepository } from "../../../domain/repositories/user/TUserRepository";
import { UserRepository } from "../../repositories/user/user.repository";
import { UserController } from "../../../Presentation/controllers/user/user.controller";
import { TUserService } from "../../../Application/types/user/TUserService";
import { UserService } from "../../../Application/Services/user/user.service";
import { SignupUseCase } from "../../../Application/useCases/user/signup.use-case";
import { LoginUseCase } from "../../../Application/useCases/user/login.use-case";
import { HandleRefreshTokenUseCase } from "../../../Application/useCases/user/handleRefreshToken.use-case";
import { FindUserUseCase } from "../../../Application/useCases/user/findUser.use-case";
import { LogoutUseCase } from "../../../Application/useCases/user/logout.use-case";

const userBinding = new ContainerModule(bind => {
	bind<UserController>(UserController).toSelf();

	bind<TUserRepository>("TUserRepository").to(UserRepository);
	bind<TUserService>("TUserService").to(UserService);

	bind<SignupUseCase>(SignupUseCase).toSelf();
	bind<LoginUseCase>(LoginUseCase).toSelf();
	bind<HandleRefreshTokenUseCase>(HandleRefreshTokenUseCase).toSelf();
	bind<FindUserUseCase>(FindUserUseCase).toSelf();
	bind<LogoutUseCase>(LogoutUseCase).toSelf();
});

export { userBinding };
