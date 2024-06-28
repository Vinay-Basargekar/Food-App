import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";


const FoodApp = () => {
	return (
		<div className="foodApp">
			<Navbar />
			<Outlet/>
		</div>
	);
};

const BrowserRouter = createBrowserRouter([
	{
		path: "/",
		element: <FoodApp />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={BrowserRouter}/>);
