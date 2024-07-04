import React from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import CartIcon from "../utils/cartIcon";
import UserIcon from "../utils/userIcon";

const Navbar = () => {
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
					<CartIcon />
					<UserIcon  />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
