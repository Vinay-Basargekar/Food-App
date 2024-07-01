import React from "react";
import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import CartIcon from "../utils/cartIcon";
import UserIcon from "../utils/userIcon";

const Navbar = () => {
	return (
		<div className="header">
			<img src={APP_LOGO} alt="app-logo" className="app-logo" />
			<div className="nav-right">
				<div className="nav-tabs">
					<ul className="nav-list">
						<Link to={"/"}>
							<li className="nav-item">Home</li>
						</Link>
						<Link to={"/contact"}>
							<li className="nav-item">Contact us</li>
						</Link>
						<Link to={"/about"}>
							<li className="nav-item">About</li>
						</Link>
					</ul>
					<CartIcon />
					<UserIcon />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
