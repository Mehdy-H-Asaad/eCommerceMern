export const CategoriesNavList = ({ isVisible }: { isVisible: boolean }) => {
	return (
		<div
			className={`bg-white ${isVisible ? "opacity-100" : "opacity-0"} duration-200  absolute top-24 py-4 px-10 w-full left-0 border-t border-t-gray-400`}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
				{Array.from({ length: 20 }).map((_, index) => (
					<div
						key={index}
						className="text-sm duration-200 hover:bg-gray-100 p-2 rounded-md font-[600] cursor-pointer"
					>
						Electronics
					</div>
				))}
			</div>
		</div>
	);
};
