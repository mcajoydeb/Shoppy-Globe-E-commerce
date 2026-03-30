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
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => dispatch(increaseQuantity(item.id))}>
        +
      </button>

      <button onClick={() => dispatch(decreaseQuantity(item.id))}>
        -
      </button>

      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;