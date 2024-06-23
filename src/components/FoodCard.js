import { FOOD_IMAGES } from "../utils/constants";

const FoodCard = (props) => {
	const { resData } = props;
	return (
		<div className="card">
			<img
				src={FOOD_IMAGES  + resData.cloudinaryImageId}
				alt="card-logo"
			></img>
			<div className="card-content">
				<div className="card-title">{resData.resName}</div>
				<div className="card-rating">
					<span>{resData.rating}★</span>
					<span>{resData.costForTwo}</span>
				</div>
				<div className="card-details">
					<span>{resData.cuisine}</span>
					<span>39 min</span>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
