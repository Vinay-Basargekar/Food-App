import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/about";

const FoodApp = () => {
	return (
		<div className="foodApp">
			<Navbar />
			<Body />
		</div>
	);
};

const BrowserRouter = createBrowserRouter([
	{
		path: "/",
		element: <FoodApp />,
	},
	{
		path: "/about",
		element: <About />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={BrowserRouter}/>);
