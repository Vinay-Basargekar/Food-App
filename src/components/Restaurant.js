import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurant = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	const [showIndex, setShowIndex] = useState(null); 

	if (!resInfo) {
		return <Shimmer />;
	}

	const info = resInfo?.cards[2]?.card?.card?.info;
	const { name, locality, areaName, avgRating, totalRatingsString, sla } =
		info || {};

	const restaurantMenu =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
			(item) => item.card.info
		) || [];

	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(type) =>
				type.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<div className="w-6/12 m-auto p-4 bg-gray-100">
			<div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300">
				<div>
					<h1 className="text-3xl text-gray-800 font-bold">{name}</h1>
					<div className="flex flex-col text-xl">
						<span className="my-2">
							{locality}, {areaName}
						</span>
						<span>{sla?.deliveryTime} mins</span>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<span className="bg-green-600 text-white font-bold py-1 px-2 rounded mb-2">
						{avgRating}★
					</span>
					<span>{totalRatingsString}</span>
				</div>
			</div>

			<div className="mt-8">
				<h1 className="text-2xl text-gray-800 mb-4 font-bold">Menu</h1>
				<div className="text-lg">
					{/* Category accordion */}
					{categories.map((category, index) => (
						// Controlled component
						<RestaurantCategory
							key={category.card.card.title}
							data={category.card.card}
							showItems={index === showIndex}
							setShowIndex={() =>
								setShowIndex(showIndex === index ? null : index)
							} // Toggle index
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
