export type TAddToCartDTO = {
	productId: string;
	userId: string;
	quantity: number;
	price: number;
};

export type TRemoveFromCartDTO = {
	userId: string;
	productId: string;
};

export type TUpdateQuantityDTO = {
	userId: string;
	productId: string;
	quantity: number;
};
