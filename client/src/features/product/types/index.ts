import { TUser } from "@/features/auth";

type TStock = {
	quantityLeft: number;
};

type TDiscount = {
	percentage?: number;
	validFrom?: Date;
	validUntil?: Date;
};

type TCategory = {
	_id?: string;
	name: string;
};

export type TVariants = {
	size?: string;
	colors?: string[];
	stock: TStock;
	price: number;
	discount?: TDiscount;
};

export type TProductDTO = {
	_id: string;
	productName: string;
	category: TCategory;
	productImage: string | ArrayBuffer | null;
	// price: number;
	description: string;
	// attributes: Record<string, string>;
	user: TUser;
	variants: TVariants[];
	status: "new" | "used";
	// stock: TStock;
	// discount?: TDiscount;
};

export type TCreateProductDTO = Omit<TProductDTO, "_id" | "user">;
export type TCreatedProductGeneralInfoDTO = Omit<
	TProductDTO,
	"_id" | "variants" | "user"
>;
