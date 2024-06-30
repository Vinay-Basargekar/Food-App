import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";


const Restaurant = () => {
	const [restaurantData, setRestaurantData] = useState(null);
	const [menu, setMenu] = useState([]);

	const { resId } = useParams();

	useEffect(() => {
		fetchResData();
	}, []);

	const fetchResData = async () => {
		try {
			const response = await fetch(MENU_API + resId);
			const data = await response.json();

			const restaurantInfo = {
				name: data?.data?.cards[2]?.card?.card?.info?.name,
				locality: data?.data?.cards[2]?.card?.card?.info?.locality,
				areaName: data?.data?.cards[2]?.card?.card?.info?.areaName,
				avgRating: data?.data?.cards[2]?.card?.card?.info?.avgRating,
				totalRatingsString:
					data?.data?.cards[2]?.card?.card?.info?.totalRatingsString,
				deliveryTime: data?.data?.cards[2]?.card?.card?.info?.sla.deliveryTime,
			};

			const restaurantMenu =
				data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
					?.card?.itemCards;
			setMenu(restaurantMenu.map((item) => item.card.info));

			setRestaurantData(restaurantInfo);
		} catch (error) {
			console.error("Error fetching restaurant data: ", error);
		}
	};

	if (!restaurantData) {
		return <Shimmer />;
	}

	return (
		<div className="res-container">
			<div className="res-details">
				<div>
					<h1>{restaurantData.name}</h1>
					<div className="res-data">
						<span>
							{restaurantData.locality}, {restaurantData.areaName}
						</span>
						<span>{restaurantData.deliveryTime} mins</span>
					</div>
				</div>

				<div className="res-data">
					<span className="res-rating">{restaurantData.avgRating}★</span>
					<span>{restaurantData.totalRatingsString} ratings</span>
				</div>
			</div>

			<div className="menu-container">
				<h1 className="menu-heading">Menu</h1>
				<div className="menu">
					{menu.map((item) => (
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
