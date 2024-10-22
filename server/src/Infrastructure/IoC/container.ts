import { Container } from "inversify";
import { productBinding } from "./product/product.binding";
import { userBinding } from "./user/user.binding";
import { categoryBinding } from "./category/category.binding";

const container = new Container();

container.load(productBinding, userBinding, categoryBinding);

export default container;
