import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  if (!item) return null; 

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-4">
  <div>
    <h3 className="font-semibold">{item.title}</h3>
    <p>${item.price}</p>
  </div>

  <div className="flex items-center gap-2">
    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 bg-gray-300">-</button>
    <span>{item.quantity}</span>
    <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 bg-gray-300">+</button>
  </div>

  <button
    onClick={() => dispatch(removeFromCart(item.id))}
    className="text-red-500"
  >
    Remove
  </button>
</div>
  );
}

export default CartItem;