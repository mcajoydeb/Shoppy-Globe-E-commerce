import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-4">

      {/* LEFT: IMAGE */}
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* MIDDLE: DETAILS */}
      <div className="flex-1 ml-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="px-2 bg-gray-300 rounded"
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="px-2 bg-gray-300 rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* RIGHT: DELETE */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 font-semibold ml-4"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;