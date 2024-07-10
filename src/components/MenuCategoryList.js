import { useDispatch} from "react-redux";
import { addItems } from "../utils/cartSlice";

const MenuCategoryList = ({ items }) => {

	const dispatch = useDispatch();

	const handleAddItems = (item) => {
		//Dispatch an action
		dispatch(addItems(item));
	}

	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="border-b-2 m-2 p-2 text-base flex justify-between"
				>
					<div>
						<div className="flex flex-col font-bold ">
							<span>{item.card.info.name}</span>
							<span>₹{item.card.info.price / 100}</span>
						</div>
						<p className="text-gray-500 text-sm w-11/12">
							{item.card.info.description}
						</p>
						<button
							className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-4 py-2 my-2 rounded"
							onClick={()=>handleAddItems(item)}
						>
							Add
						</button>
					</div>
					<img
						className="h-[10rem]"
						src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
						alt={item.name}
					/>
				</div>
			))}
		</div>
	);
};

export default MenuCategoryList;
