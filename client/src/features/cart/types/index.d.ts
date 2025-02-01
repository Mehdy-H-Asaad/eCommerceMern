import { TCategory } from "@/features/category/types";
import { TVariants } from "@/features/product/types";

export type TCartItemData = {
	_id: string;
	productName: string;
	productImage: string | ArrayBuffer | null;
	category: TCategory;
	quantity: number;
	variants: TVariants[];
};

export type TCartItemsDTO = {
	userId: string;
	items: {
		productId: TCartItemData;
		quantity: number;
		price: number;
	}[];
	_id?: string;
};

export type TGetCartItemsDTO = {
	productId: TCartItemData;
	quantity: number;
	price: number;
};

export type TAddItemToCartDTO = {
	productId: string;
	quantity: number;
	price: number;
};

export type TUpdateQuantityDTO = {
	productId: string;
	quantity: number;
};
