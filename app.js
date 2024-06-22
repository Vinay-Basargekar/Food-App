import React from "react";
import ReactDOM from "react-dom/client";

const Navbar = () => {
	return (
		<div className="header">
			<img
				src="https://cdn6.f-cdn.com/contestentries/1318421/28372416/5aedd3a7adb01_thumb900.jpg"
				alt="app-logo"
				className="app-logo"
			/>
			<div className="search">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="size"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<input type="text" placeholder="Search..."></input>
			</div>
			<div className="nav-tabs">
				<ul>
					<li>Home</li>
					<li>Contact Us</li>
					<li>About</li>
				</ul>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-cart"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
					/>
				</svg>
				<svg
					viewBox="0 0 36 36"
					fill="none"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					width="80"
					height="80"
					className="userLogo"
				>
					<mask
						id=":rj:"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="36"
						height="36"
					>
						<rect width="36" height="36" fill="#FFFFFF"></rect>
					</mask>
					<g mask="url(#:rj:)">
						<rect width="36" height="36" fill="#ff005b"></rect>
						<rect
							x="0"
							y="0"
							width="36"
							height="36"
							transform="translate(9 -5) rotate(219 18 18) scale(1)"
							fill="#ffb238"
							rx="6"
						></rect>
						<g transform="translate(4.5 -4) rotate(9 18 18)">
							<path
								d="M15 19c2 1 4 1 6 0"
								stroke="#000000"
								fill="none"
								stroke-linecap="round"
							></path>
							<rect
								x="10"
								y="14"
								width="1.5"
								height="2"
								rx="1"
								stroke="none"
								fill="#000000"
							></rect>
							<rect
								x="24"
								y="14"
								width="1.5"
								height="2"
								rx="1"
								stroke="none"
								fill="#000000"
							></rect>
						</g>
					</g>
				</svg>
			</div>
		</div>
	);
};

const FoodCard = () => {
	return (
		<div className="card">
			<img
				src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lbye6vascq2ggicljkkw"
				alt="Wadeshwar"
			></img>
			<div class="card-content">
				<div class="card-title">Wadeshwar</div>
				<div class="card-rating">
					<span>4.3★</span>
					<span>₹50 for one</span>
				</div>
				<div class="card-details">
					<span>South Indian, Sandwich, F...</span>
					<span>39 min</span>
				</div>
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<div className="card-container">
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
		</div>
	);
};

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
