import { ContainerModule } from "inversify";
import { CategoryController } from "../../../Presentation/controllers/category/category.controller";
import { TCategoryRepository } from "../../../domain/repositories/category/TCategoryRepository";
import { CategoryRepository } from "../../repositories/category/category.repository";
import { TCategoryService } from "../../../Application/types/category/TCategoryService";
import { CategoryService } from "../../../Application/Services/category/category.service";
import { GetSingleCategoryUseCase } from "../../../Application/useCases/category/getSingleCategory.use-case";
import { GetAllCategoriesUseCase } from "../../../Application/useCases/category/getAllCategories.use-case";
import { CreateCategoryUseCase } from "../../../Application/useCases/category/createCategory.use-case";

export const categoryBinding = new ContainerModule(bind => {
	bind<CategoryController>(CategoryController).toSelf();

	bind<TCategoryRepository>("TCategoryRepository").to(CategoryRepository);
	bind<TCategoryService>("TCategoryService").to(CategoryService);

	bind<GetSingleCategoryUseCase>(GetSingleCategoryUseCase).toSelf();
	bind<GetAllCategoriesUseCase>(GetAllCategoriesUseCase).toSelf();
	bind<CreateCategoryUseCase>(CreateCategoryUseCase).toSelf();
});
