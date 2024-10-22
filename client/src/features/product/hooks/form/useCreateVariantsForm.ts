import { useVariantsStore } from "../..";
import { useCreateProductForm } from "./useCreateProductForm";

export const useCreateVariantsForm = () => {
	const { addVariants, removeVariant } = useVariantsStore();

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		onChange: (value: any) => void
	) => {
		const { value } = e.target;
		if (!isNaN(Number(value)) || value === "") onChange(Number(value));
	};

	const { createdProductForm } = useCreateProductForm();

	const handleRemoveVariant = (index: number) => {
		// Unregister all fields related to the variant being deleted
		createdProductForm.unregister(`variants.${index}`);
		removeVariant(index);
		createdProductForm.setValue(
			"variants",
			createdProductForm.getValues("variants").filter((_, i) => i !== index)
		);
	};
	return { addVariants, handleInputChange, handleRemoveVariant };
};
