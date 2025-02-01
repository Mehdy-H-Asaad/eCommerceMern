type TMainTitle = {
	title: string;
	addClasses?: string | undefined;
};

const MainTitle = ({ title, addClasses }: TMainTitle) => {
	return (
		<div
			className={`font-[700] uppercase text-2xl : sm:text-4xl orbitron ${addClasses || ""}`}
		>
			{title}
		</div>
	);
};

export default MainTitle;
