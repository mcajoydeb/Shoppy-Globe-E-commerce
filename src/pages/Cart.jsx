import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6  min-w-[1280px] mx-auto px-4 flex">

      {/* LEFT SIDE - CART ITEMS */}
      <div className="md:col-span-2">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        )}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className="bg-white shadow rounded p-4 h-fit sticky top-4">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{items.length}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Total Amount:</span>
          <span className="font-bold">${totalAmount}</span>
        </div>

        <Link to="/checkout">
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;