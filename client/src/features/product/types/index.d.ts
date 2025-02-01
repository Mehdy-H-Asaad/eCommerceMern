import { TUser } from "@/features/auth/types";
import { TCategory } from "@/features/category/types";

type TStock = {
	quantityLeft: number;
};

type TDiscount = {
	percentage?: number;
	validFrom?: Date;
	validUntil?: Date;
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
	description: string;
	user: TUser;
	variants: TVariants[];
	status: "new" | "used";
	reviews?: string[];
	createdAt: string;
};

export type TCreateProductDTO = Omit<TProductDTO, "_id" | "user">;
export type TCreatedProductGeneralInfoDTO = Omit<
	TProductDTO,
	"_id" | "variants" | "user"
>;
