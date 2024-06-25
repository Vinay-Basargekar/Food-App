import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

	useEffect(()=>{
		fetchData();
	},[]);

	const fetchData = async () => {
		const response = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const data = await response.json();

		const restaurants =
			data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
				(res) => res.info
			);

		setlistOfRestaurants(restaurants);
	};

	return (
		<>
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredData = listOfRestaurants.filter(
                            (res) => res.avgRating > 4.3
                        );
                        setlistOfRestaurants(filteredData);
                        // console.log(listOfRestaurants);
					}}
				>
					Highly Rated
				</button>
			</div>
			<div className="card-container">
				{listOfRestaurants.map((res) => (
					<FoodCard key={res.id} resData={res} />
				))};
			</div>
		</>
	);
};

export default Body;
