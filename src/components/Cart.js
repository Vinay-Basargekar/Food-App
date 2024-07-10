import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice"; // Assume removeFromCart action exists

const Cart = () => {
	const cart = useSelector((state) => state.cart.items);
	const dispatch = useDispatch();

	const handleRemoveFromCart = (id) => {
		dispatch(removeItem(id));
	};

	return (
		<div className=" mx-auto w-[50%]">
			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Cart Items</h2>
				{cart.length === 0 ? (
					<p className="text-gray-600">Your cart is empty.</p>
				) : (
					cart.map((item) => (
						<div
							key={item.card.info.id}
							className="flex items-center bg-gray-800 p-4 rounded mb-2 text-white"
						>
							<img
								className="h-20 w-20 object-cover mr-4 rounded"
								src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
								alt={item.card.info.name}
							/>
							<div className="flex-1">
								<h3 className="text-lg font-bold">{item.card.info.name}</h3>
								<p className="text-gray-400">₹{item.card.info.price / 100}</p>
							</div>
							<button
								onClick={() => handleRemoveFromCart(item.card.info.id)}
								className="bg-red-700 hover:bg-red-600 text-white px-2 py-1 rounded"
							>
								Delete
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Cart;
