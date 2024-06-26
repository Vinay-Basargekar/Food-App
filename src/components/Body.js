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
		const response = await fetch(
			"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const data = await response.json();

		const restaurants =
			data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
				(res) => res.info
			);

		setListOfRestaurants(restaurants);
		setFilteredData(restaurants);
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
							const filteredData = listOfRestaurants.filter(
								(res) => res.avgRating > 4.3
							);
							setListOfRestaurants(filteredData);
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
