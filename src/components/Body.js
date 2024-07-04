import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import SearchIcon from "../utils/searchIcon";
import useOnlineStatus from "../utils/useOnlineStatus";
import foodPark from "../images/foodPark.jpg"

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [search, setSearch] = useState("");


	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
			<div className="offline-mode">
				<h1>Connect to the Internet</h1>
				<p>You're offline. Check your connection.</p>
			</div>
		);
	}

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="hero">
				<div className="overlay"></div>
				<img className="hero-img" src={foodPark} alt="hero section" />
				<div className="wrapper">
					<div className="hero-content">
						<h1 className="catch">How can we best serve you?</h1>
						<div className="search-bar">
							<input
								type="text"
								placeholder="What are you looking for?"
								value={search}
								onChange={(e) => {
									setSearch(e.target.value);
								}}
							/>
							<button
								type="button"
								className="search-btn"
								onClick={() => {
									const filtered = listOfRestaurants.filter((res) =>
										res.name.toLowerCase().includes(search.toLowerCase())
									);
									setFilteredData(filtered);
								}}
							>
								{/* <i className="fa fa-search"> */}
								<SearchIcon />
								{/* </i>{" "} */}
							</button>
						</div>
					</div>
				</div>
				{/* <div className="search">
					<SearchIcon />
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							const filtered = listOfRestaurants.filter((res) =>
								res.name.toLowerCase().includes(search.toLowerCase())
							);
							setFilteredData(filtered);
						}}
					>
						Search
					</button>
				</div> */}
			</div>
			<div className="search-container">
				{/* <div className="search">
					<SearchIcon />
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							const filtered = listOfRestaurants.filter((res) =>
								res.name.toLowerCase().includes(search.toLowerCase())
							);
							setFilteredData(filtered);
						}}
					>
						Search
					</button>
				</div> */}
				<div className="filter">
					<button
						className="filter-btn"
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
			<div className="card-container">
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
