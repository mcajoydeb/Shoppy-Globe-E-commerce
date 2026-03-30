import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order placed");

    // clear cart
    dispatch({ type: "cart/clearCart" });

    // redirect to home
    navigate("/");
  };

  return (
    <div>
      <h2>Checkout</h2>

      <h3>Order Summary</h3>
      {items.map((item) => (
        <p key={item.id}>
          {item.title} (x{item.quantity})
        </p>
      ))}

      <h3>User Details</h3>
      <input type="text" placeholder="Name" /><br />
      <input type="email" placeholder="Email" /><br />

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;