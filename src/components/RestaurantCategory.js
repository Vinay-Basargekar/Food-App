import { useState } from "react";
import MenuCategoryList from "./MenuCategoryList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
	};

	return (
		<div>
			<div className="mx-auto my-3 bg-gray-50 shadow-lg p-4 rounded">
				<div
					className="flex justify-between cursor-pointer"
					onClick={handleClick}
				>
					<span>
						{data.title} ({data.itemCards.length})
					</span>
					<svg
						data-accordion-icon
						className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
							showItems ? "rotate-180" : ""
						}`}
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5 5 1 1 5"
						/>
					</svg>
				</div>
				{showItems && <MenuCategoryList items={data.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
