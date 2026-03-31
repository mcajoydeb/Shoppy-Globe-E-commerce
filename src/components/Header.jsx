import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🛍️ ShoppyGlobe</h1>

      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:underline">Home</Link>

        <Link to="/cart" className="relative">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
            {totalItems}
          </span>
        </Link>

        <Link to="/checkout">Checkout</Link>
      </nav>

      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded text-black"
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
    </header>
  );
}

export default Header;