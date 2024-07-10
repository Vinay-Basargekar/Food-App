import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const FoodApp = () => {
	return (
		<Provider store={appStore}>
			<div className="foodApp w-full h-[400px] font-myFont">
				<Navbar />
				<Outlet />
			</div>
		</Provider>
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
			{
				path: "/restaurants/:resId",
				element: <Restaurant />,
			},
			{
				path:"/Cart",
				element:<Cart/>
			}
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={BrowserRouter}/>);
