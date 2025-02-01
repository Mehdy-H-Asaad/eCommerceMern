import { Container } from "inversify";
import { productBinding } from "./product/product.binding";
import { userBinding } from "./user/user.binding";
import { categoryBinding } from "./category/category.binding";
import { cartBinding } from "./cart/cart.binding";

const container = new Container();

container.load(productBinding, userBinding, categoryBinding, cartBinding);

export default container;
