import { FOOD_IMAGES } from "../utils/constants";

const FoodCard = ({
	resData: { resName, rating, costForTwo, cuisine, cloudinaryImageId },
}) => {
	return (
		<div className="card">
			<img src={FOOD_IMAGES + cloudinaryImageId} alt="card-logo" />
			<div className="card-content">
				<div className="card-title">{resName}</div>
				<div className="card-rating">
					<span>{rating}★</span>
					<span>{costForTwo}</span>
				</div>
				<div className="card-details">
					<span>{cuisine}</span>
					<span>39 min</span>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
