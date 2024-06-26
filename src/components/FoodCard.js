import { FOOD_IMAGES } from "../utils/constants";

const FoodCard = ({
	resData: { name, avgRating, costForTwo, locality, areaName, cloudinaryImageId },
}) => {
	return (
		<div className="card">
			<img className="food-img" src={FOOD_IMAGES + cloudinaryImageId} alt="card-logo" />
			<div className="card-content">
				<div className="card-title">{name}</div>
				<div className="card-rating">
					<span className="rating">{avgRating}★</span>
					<span>{costForTwo}</span>
				</div>
				<div className="card-details">
					<span>{locality}, {areaName}</span>
					<span>39 min</span>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
