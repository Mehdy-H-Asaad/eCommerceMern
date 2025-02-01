import { IoSearch } from "react-icons/io5";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const NavBarSearch = ({
	isVisible,
	onClose,
}: {
	isVisible: boolean;
	onClose: (value: boolean) => void;
}) => {
	const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState<string>("");

	const handleSearchClick = () => {
		if (searchInput.trim() !== "") {
			navigate(`/shop/?search=${searchInput}`);
			onClose(!isVisible);
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleSearchClick();
		}
	};

	return (
		<div
			className={`fixed ${
				isVisible ? "top-0" : "-top-56"
			} duration-300 transition-all flex items-center py-10 justify-center bg-white w-full z-50`}
			onClick={() => onClose(!isVisible)}
		>
			<div
				className="flex flex-col gap-4"
				onClick={e => e.stopPropagation()} // Prevent click propagation
			>
				<div className="flex w-full sm:w-96 relative items-center">
					<Input
						value={searchInput}
						onChange={e => setSearchInput(e.target.value)} // Update the state on input change
						onKeyDown={handleKeyDown} // Trigger search on Enter key press
						placeholder="Search products"
						className="pr-10 border border-black"
					/>
					<IoSearch
						onClick={handleSearchClick}
						size={20}
						className="absolute right-0 h-full w-10 p-2 rounded-sm cursor-pointer bg-black text-white"
					/>
				</div>
				<div className="flex gap-4">
					<h1 className="font-[500] text-black">Popular searches: </h1>
					{["T-Shirt", "Watch", "Makeup"].map((ele, index) => (
						<div
							key={index}
							className="font-[500] text-black cursor-pointer"
							onClick={() => {
								setSearchInput(ele);
								onClose(!isVisible);
								navigate(`/shop/?search=${ele}`); // Navigate directly with the selected popular search
							}}
						>
							{ele}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
