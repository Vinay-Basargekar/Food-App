import { useEffect, useState } from "react";
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
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
			(item) => item.card.info
		) || [];

	return (
		<div className="res-container">
			<div className="res-details">
				<div>
					<h1>{name}</h1>
					<div className="res-data">
						<span>
							{locality}, {areaName}
						</span>
						<span>{sla?.deliveryTime} mins</span>
					</div>
				</div>

				<div className="res-data">
					<span className="res-rating">{avgRating}★</span>
					<span>{totalRatingsString} ratings</span>
				</div>
			</div>

			<div className="menu-container">
				<h1 className="menu-heading">Menu</h1>
				<div className="menu">
					{restaurantMenu.map((item) => (
						<div className="res-menu" key={item.id}>
							<img
								className="food-img"
								src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.imageId}`}
								alt={item.name}
							/>
							<div className="card-title">{item.name}</div>
							<div className="card-title">Rs. {item.price / 100}</div>
							<div className="add-food">
								<span>Add</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Restaurant;
