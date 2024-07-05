import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import SearchIcon from "../utils/searchIcon";
import useOnlineStatus from "../utils/useOnlineStatus";
import foodPark from "../images/foodPark.jpg";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6700628&lng=73.73160419999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const data = await response.json();
			const restaurantCards =
				data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

			const restaurants = restaurantCards.map((restaurant) => restaurant.info);

			setListOfRestaurants(restaurants);
			setFilteredData(restaurants);
		};
		fetchData();
	}, []);

	//custom react hook!
	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) {
		return (
			<div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800 text-center p-5 border border-red-200 rounded-lg shadow-md">
				<h1 className="text-4xl mb-2.5">Connect to the Internet</h1>
				<p className="text-lg">You're offline. Check your connection.</p>
			</div>
		);
	}

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="relative w-full h-[400px] ">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-10 h-[400px]"></div>
				<img
					className="h-[400px] object-cover w-[100%] "
					src={foodPark}
					alt="hero section"
				/>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
					<div className="">
						<h1 className="text-5xl text-white p-4 font-bold">
							How can we best serve you?
						</h1>
						<div className="flex content-center justify-center">
							<input
								type="text"
								placeholder="What are you looking for?"
								className="w-[50%] p-[8px]"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
							/>
							<button
								type="button"
								className="bg-[#d9534f] hover:bg-[#c9302c] text-white cursor-pointer p-3"
								onClick={() => {
									const filtered = listOfRestaurants.filter((res) =>
										res.name.toLowerCase().includes(search.toLowerCase())
									);
									setFilteredData(filtered);
								}}
							>
								<SearchIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="search-container">
				<div className="filter flex justify-between items-center w-[80%] mx-auto">
					<button
						className="filter-btn bg-[#d9534f] hover:bg-[#c9302c] text-white p-3 m-4 rounded"
						onClick={() => {
							const filteredDat = listOfRestaurants.filter(
								(res) => res.avgRating > 4.3
							);
							setFilteredData(filteredDat);
						}}
					>
						Highly Rated
					</button>
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				{filteredData.map((res) => (
					<Link key={res.id} to={"./restaurants/" + res.id}>
						<FoodCard resData={res} />
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
