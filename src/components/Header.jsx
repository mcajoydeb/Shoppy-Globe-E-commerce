import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between py-4">

        {/* LEFT: LOGO */}
        <div className="text-2xl font-bold">
          <Link to="/">🛍️ ShoppyGlobe</Link>
        </div>

        {/* CENTER: MENU */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/checkout" className="hover:underline">Checkout</Link>
        </nav>

        {/* RIGHT: SEARCH + CART */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded text-black"
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />

          {/* CART */}
          <Link to="/cart" className="relative text-xl">
            🛒
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
              {totalItems}
            </span>
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Header;