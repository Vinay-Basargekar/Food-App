import { useState } from "react";

import resList from "../utils/mockData";
import FoodCard from "./FoodCard";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

	return (
		<>
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredData = listOfRestaurants.filter(
                            (res) => res.rating > 4.5
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
				))}
			</div>
		</>
	);
};

export default Body;
