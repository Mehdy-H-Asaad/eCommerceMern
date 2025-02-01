import { create } from "zustand";
import { TCartItemData } from "../types";

type TCartStore = {
	cart: TCartItemData[];
	addItem: (cartItemData: TCartItemData) => void;
	removeItem: (id: string) => void;
	updateItemQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
};

export const useCartStore = create<TCartStore>(set => ({
	cart: [],
	addItem: item =>
		set(state => {
			if (state.cart.find(existingItem => existingItem._id === item._id)) {
				return {
					cart: state.cart.map(cartItem =>
						cartItem._id == item._id
							? { ...cartItem, quantity: item.quantity }
							: cartItem
					),
				};
			}
			return { cart: [...state.cart, item] };
		}),

	removeItem: (id: string) =>
		set(state => ({ cart: state.cart.filter(item => item._id !== id) })),

	updateItemQuantity: (id: string, quantity: number) =>
		set(state => ({
			cart: state.cart.map(item =>
				item._id === id ? { ...item, quantity: quantity } : item
			),
		})),
	clearCart: () => set(() => ({ cart: [] })),
}));
