import { create } from "zustand";
import { TVariants } from "..";

type TStore = {
	variants: TVariants[];
	addVariants: () => void;
	removeVariant: (index: number) => void;
};

const initialState: TVariants = {
	size: "",
	colors: [],
	stock: { quantityLeft: 0 },
	price: 0,
	discount: {
		percentage: 0,
	},
};

export const useVariantsStore = create<TStore>(set => ({
	variants: [initialState],
	addVariants: () =>
		set(state => ({
			variants: [...state.variants, { ...initialState }],
		})),
	removeVariant: index =>
		set(state => ({
			variants: state.variants.filter((_, i) => i != index),
		})),
}));
