import { ContainerModule } from "inversify";
import { CategoryController } from "../../../Presentation/controllers/category/category.controller";
import { CategoryRepository } from "../../repositories/category/category.repository";
import { CategoryService } from "../../../Application/Services/category/category.service";
import { GetSingleCategoryUseCase } from "../../../Application/use-cases/category/getSingleCategory.use-case";
import { GetAllCategoriesUseCase } from "../../../Application/use-cases/category/getAllCategories.use-case";
import { CreateCategoryUseCase } from "../../../Application/use-cases/category/createCategory.use-case";
import { FindCategoryByNameUseCase } from "../../../Application/use-cases/category/findCategoryByName.use-case";

export const categoryBinding = new ContainerModule(bind => {
	bind<CategoryController>(CategoryController).toSelf();

	bind<CategoryRepository>(CategoryRepository).toSelf();
	bind<CategoryService>(CategoryService).toSelf();

	bind<GetSingleCategoryUseCase>(GetSingleCategoryUseCase).toSelf();
	bind<GetAllCategoriesUseCase>(GetAllCategoriesUseCase).toSelf();
	bind<CreateCategoryUseCase>(CreateCategoryUseCase).toSelf();
	bind<FindCategoryByNameUseCase>(FindCategoryByNameUseCase).toSelf();
});
