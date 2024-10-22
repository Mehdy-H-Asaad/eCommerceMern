import { z } from "zod";

const variantsSchema = z.object({
	size: z.string().optional(),
	colors: z.array(z.string()).optional(),
	price: z.number().min(1, "Price is required"),
	stock: z.object({
		quantityLeft: z.number().min(1, "Stock is required"),
	}),

	discount: z
		.object({
			percentage: z.number().optional(), // Optional
		})
		.optional(),
});

export const createdProductSchema = z.object({
	productName: z.string().min(1, "Product name is required"),
	description: z.string().min(1, "Product description is required"),
	status: z.enum(["new", "used"]).refine(value => value, {
		message: "Condition is required",
	}),
	productImage: z.string().min(1, "Product image is required"),
	category: z.object({
		_id: z.string().optional(),
		name: z.string().min(1, "Category is required"),
	}),
	variants: z.array(variantsSchema),
});
