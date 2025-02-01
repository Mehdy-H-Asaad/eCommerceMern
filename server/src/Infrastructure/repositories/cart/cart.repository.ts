import { injectable } from "inversify";
import { CartModel } from "../../database/models/cart.model";
import { TCart } from "../../../domain/entities/cart.entity";
import { TUpdateQuantityDTO } from "../../../Application/DTOs/cart/cart.dto";
// import { Cart } from "../../../domain/entities/cart.entity";

@injectable()
export class CartRepository {
	getAllCartItems = async (userId: string): Promise<TCart | null> => {
		const cartItems = await CartModel.findOne({ userId }).populate({
			path: "items.productId",
		});

		if (!cartItems) return null;

		const userCart = new CartModel({
			_id: cartItems._id,
			items: cartItems.items,
			userId: cartItems.userId,
			createdAt: cartItems.updatedAt,
			updatedAt: cartItems.updatedAt,
		});

		return userCart;
	};

	findCartByUser = async (userId: string): Promise<TCart | null> => {
		const cartItems = await CartModel.findOne({ userId });

		if (!cartItems) return null;

		const userCart = new CartModel({
			_id: cartItems._id,
			items: cartItems.items,
			userId: cartItems.userId,
			createdAt: cartItems.updatedAt,
			updatedAt: cartItems.updatedAt,
		});

		return userCart;
	};

	save = async (newCart: TCart): Promise<TCart> => {
		const existingCart = await CartModel.findOneAndUpdate(
			{
				userId: newCart.userId,
			},
			newCart,
			{ new: true, upsert: true }
		);

		return new CartModel({
			_id: existingCart._id,
			items: existingCart.items,
			userId: existingCart.userId,
			createdAt: existingCart.updatedAt,
			updatedAt: existingCart.updatedAt,
		});
	};

	create = async (cart: TCart): Promise<TCart> => {
		const newCart = new CartModel(cart);

		return newCart.save();
	};

	updateQuantity = async (data: TUpdateQuantityDTO): Promise<TCart | null> => {
		const { productId, quantity, userId } = data;

		const findCartAndUpdateQuantity = await CartModel.findOneAndUpdate(
			{
				userId,
				"items.productId": productId,
			},
			{ $set: { "items.$.quantity": quantity } },
			{ new: true }
		);

		return findCartAndUpdateQuantity || null;
	};
}
