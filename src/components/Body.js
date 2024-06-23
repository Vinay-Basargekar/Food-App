import { useState } from "react";
import resList from "../utils/mockData";
import FoodCard from "./FoodCard";

const Body = () => {

    let [listOfRestaurants, setlistOfRestaurants] = useState(resList);

	return (
		<>
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						listOfRestaurants = listOfRestaurants.filter(
                            (res) => res.rating > 4.5
                        );
                        setlistOfRestaurants(listOfRestaurants);
                        console.log(listOfRestaurants);
					}}
				>
					Highly Rated
				</button>
			</div>
			<div className="card-container">
				{listOfRestaurants.map((res) => (
					<FoodCard key={res.resName} resData={res} />
				))}
			</div>
		</>
	);
};

export default Body;
