import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ShoppyGlobe</h1>

      <nav className="flex gap-4 items-center">
        <Link to="/">Home</Link>

        <Link to="/cart" className="relative">
          🛒 Cart
          <span className="ml-1 bg-red-500 px-2 rounded-full text-sm">
            {totalItems}
          </span>
        </Link>

        <Link to="/checkout">Checkout</Link>
      </nav>

      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-1 rounded text-black"
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </header>
  );
}

export default Header;