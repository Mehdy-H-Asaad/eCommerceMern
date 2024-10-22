type TButton = {
	title: string | number;
	addClasses?: string;
	type?: "submit" | "button";
	onClick?(value?: any): void;
};

const GeneralButton = ({
	title,
	addClasses,
	type = "button",
	onClick,
}: TButton) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`bg-white px-8 py-3 uppercase w-fit font-[600] rounded-md cursor-pointer tracking-wide duration-300 hover:bg-black hover:text-white ${
				!addClasses ? "" : addClasses
			}`}
		>
			{title}
		</button>
	);
};

export default GeneralButton;
