import { useState, useEffect, ChangeEvent } from "react";
import { TCreatedProductGeneralInfoDTO } from "../..";
import { useGetCategories, useGetSingleProduct } from "../..";

export const useAttributesChange = (id: string) => {
	const { categories } = useGetCategories();

	const { singleProductData, isLoadingProduct } = useGetSingleProduct(id);
	const [updatedProductDetails, setUpdatedProductDetails] =
		useState<TCreatedProductGeneralInfoDTO>({
			productName: "",
			description: "",
			status: "new",
			category: { name: "", _id: "" },
			productImage: "",
		});

	useEffect(() => {
		if (singleProductData) {
			setUpdatedProductDetails({
				productName: singleProductData.productName,
				description: singleProductData.description,
				status: singleProductData.status,
				category: {
					name: singleProductData.category.name,
					_id: singleProductData.category._id || "",
				},
				productImage: singleProductData.productImage,
			});
		}
	}, [singleProductData]);

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value, id } = e.target;

		setUpdatedProductDetails({ ...updatedProductDetails, [id]: value });
	};

	const handleStatusChange = (status: "new" | "used") => {
		setUpdatedProductDetails({ ...updatedProductDetails, status: status });
	};

	const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				if (typeof reader.result === "string") {
					setUpdatedProductDetails({
						...updatedProductDetails,
						productImage: reader.result,
					});
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleCategoryChange = (categoryId: string) => {
		const selectedCategory = categories?.find(cat => cat._id === categoryId);
		if (selectedCategory) {
			setUpdatedProductDetails({
				...updatedProductDetails,
				category: { name: selectedCategory.name, _id: selectedCategory._id },
			});
		}
	};

	return {
		handleCategoryChange,
		handleImgChange,
		handleInputChange,
		handleStatusChange,
		categories,
		singleProductData,
		updatedProductDetails,
		isLoadingProduct,
	};
};
