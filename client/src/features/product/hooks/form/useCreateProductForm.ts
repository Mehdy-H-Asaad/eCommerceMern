import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, ChangeEvent } from "react";
import { createdProductSchema, useCreateProduct } from "../..";

export const useCreateProductForm = () => {
	const [selectedImg, setSelectedImg] = useState<string | ArrayBuffer | null>(
		null
	);

	const createdProductForm = useForm<z.infer<typeof createdProductSchema>>({
		resolver: zodResolver(createdProductSchema),
		defaultValues: {
			category: { name: "", _id: "" },
			description: "",
			productName: "",
			status: "new",
			productImage: "",
			variants: [],
		},
	});

	const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const { createProduct } = useCreateProduct();

	const onSubmit = (values: z.infer<typeof createdProductSchema>) => {
		const valuesWithProductImg = { ...values, productImage: selectedImg };
		createProduct(valuesWithProductImg);
	};

	return { handleImgChange, onSubmit, createdProductForm, selectedImg };
};
