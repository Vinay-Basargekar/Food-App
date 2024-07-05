import { FOOD_IMAGES } from "../utils/constants";

const FoodCard = ({
	resData: {
		name,
		avgRating,
		costForTwo,
		locality,
		areaName,
		cloudinaryImageId,
		sla,
	},
}) => {
	return (
		<div className="border border-gray-300 rounded-lg overflow-hidden m-4 w-[330px] h-[350px] transition-transform duration-300 ease-in-out transform hover:scale-95 cursor-pointer">
			<img
				className="w-full h-[200px] object-cover"
				src={FOOD_IMAGES + cloudinaryImageId}
				alt="card-logo"
			/>
			<div className="p-4">
				<div className="text-xl font-bold mb-2">{name}</div>
				<div className="flex justify-between mb-2">
					<span className="bg-green-600 text-white px-2 py-1 rounded">
						{avgRating}★
					</span>
					<span>{costForTwo}</span>
				</div>
				<div className="flex justify-between mb-2">
					<span className="w-[60%]">
						{locality}, {areaName}
					</span>
					<span>{sla.deliveryTime} mins</span>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
