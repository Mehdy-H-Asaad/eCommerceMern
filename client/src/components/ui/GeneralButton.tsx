import React from "react";
import { Button, ButtonProps } from "./button";

type TButton = {
	title: string | number;
	addClasses?: string;
	type?: "submit" | "button";
	onClick?(value?: any): void;
};

const GeneralButton = React.forwardRef<
	HTMLButtonElement,
	ButtonProps & TButton
>(({ title, addClasses, type, onClick, ...props }, ref) => {
	return (
		<Button
			ref={ref}
			type={type}
			onClick={onClick}
			className={`bg-white text-black px-8 py-3 uppercase w-fit font-[600] rounded-md cursor-pointer tracking-wide duration-300 hover:bg-black hover:text-white ${
				!addClasses ? "" : addClasses
			}`}
			{...props}
		>
			{title}
		</Button>
	);
});

export default GeneralButton;
