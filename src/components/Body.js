import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Shimmer from "./shimmer";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const [search, setSearch] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6700628&lng=73.73160419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);

			if (!response.ok) {
				throw new Error("Network response was not ok" + response.statusText);
			}

			const data = await response.json();
			const restaurantCards = data?.data?.cards?.find(
				(card) => card.card.card.gridElements
			)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

			if (!restaurantCards) {
				throw new Error("Failed to extract restaurant data");
			}

			const restaurants = restaurantCards.map((restaurant) => restaurant.info);
			setListOfRestaurants(restaurants);
			setFilteredData(restaurants);
		} catch (error) {
			console.error("Fetching data failed:", error);
		}
	};


	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search-container">
				<div className="search">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button className="search-btn"
						onClick={() => {
							const filtered = listOfRestaurants.filter((res) =>
								res.name.toLowerCase().includes(search.toLowerCase())
							);
							setFilteredData(filtered);
						}}
					>
						Search
					</button>
				</div>
				<div className="filter">
					<button
						className="filter-btn"
						onClick={() => {
							const filteredDat = listOfRestaurants.filter(
								(res) => res.avgRating > 4.5
							);
							setFilteredData(filteredDat);
						}}
					>
						Highly Rated
					</button>
				</div>
			</div>
			<div className="card-container">
				{filteredData.map((res) => (
					<FoodCard key={res.id} resData={res} />
				))}
			</div>
		</>
	);
};

export default Body;
