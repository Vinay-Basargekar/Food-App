import React from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import CartIcon from "../utils/cartIcon";
import UserIcon from "../utils/userIcon";
import { useSelector } from "react-redux";

const Navbar = () => {

	const cartCount = useSelector((state) => state.cart.items.length);
	// console.log(cartCount);

	return (
		<div className="flex justify-between items-center w-[80%] mx-auto ">
			<img src={APP_LOGO} alt="app-logo" className="app-logo w-32" />
			<div className="flex items-center">
				<div className="flex items-center mr-8 text-xl">
					<ul className="flex">
						<Link
							to={"/"}
							className="transition-colors duration-300 no-underline text-gray-800 px-4 py-2 hover:text-orange-600 hover:bg-orange-50 rounded"
						>
							<li className="p-4">Home</li>
						</Link>
						<Link
							to={"/contact"}
							className="transition-colors duration-300 no-underline text-gray-800 px-4 py-2 hover:text-orange-600 hover:bg-orange-50 rounded"
						>
							<li className="p-4">Contact us</li>
						</Link>
						<Link
							to={"/about"}
							className="transition-colors duration-300 no-underline text-gray-800 px-4 py-2 hover:text-orange-600 hover:bg-orange-50 rounded"
						>
							<li className="p-4">About</li>
						</Link>
					</ul>
					<div className="relative">
						{cartCount > 0 && (
							<span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
								{cartCount}
							</span>
						)}
						<Link to="/Cart">
							<CartIcon />
						</Link>
					</div>
					<UserIcon />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
