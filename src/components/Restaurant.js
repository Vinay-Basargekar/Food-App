import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);

	if (!resInfo) {
		return <Shimmer />;
	}

	const info = resInfo?.cards[2]?.card?.card?.info;
	const { name, locality, areaName, avgRating, totalRatingsString, sla } =
		info || {};

	const restaurantMenu =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
			(item) => item.card.info
		) || [];

	return (
		<div className="w-[80%] mx-auto p-4 bg-gray-100">
			<div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-300">
				<div>
					<h1 className="text-2xl text-gray-800">{name}</h1>
					<div className="flex flex-col">
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
					<span>{totalRatingsString} ratings</span>
				</div>
			</div>

			<div className="mt-8">
				<h1 className="text-xl text-gray-800 mb-4">Menu</h1>
				<div className="flex flex-wrap gap-4">
					{restaurantMenu.map((item) => (
						<div
							className="w-[calc(25%-1rem)] bg-white rounded shadow-md overflow-hidden text-center p-4 transform transition-transform duration-300 hover:scale-105"
							key={item.id}
						>
							<img
								className="w-full h-48 object-cover mb-4"
								src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`}
								alt={item.name}
							/>
							<div className="text-lg font-semibold text-gray-800 mb-2">
								{item.name}
							</div>
							<div className="text-lg text-gray-800 mb-2">
								Rs. {item.price / 100}
							</div>
							<button className="bg-green-600 text-white py-2 px-4 rounded mt-2 hover:bg-green-700">
								Add
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
