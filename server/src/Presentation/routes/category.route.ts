import express from "express";
import container from "../../Infrastructure/IoC/container";
import { CategoryController } from "../controllers/category/category.controller";
const router = express.Router();

const categoryController =
	container.get<CategoryController>(CategoryController);

router
	.route("/")
	.get(categoryController.getAllCategories)
	.post(categoryController.createCategory);

router.route("/:categoryName").get(categoryController.findCategoryByName);

router.route("/:categoryId").get(categoryController.getSingleCategory);

export default router;
