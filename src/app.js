import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

const FoodApp = () => {
	return (
		<div className="foodApp">
			<Navbar />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoodApp />);
