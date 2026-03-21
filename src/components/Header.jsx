import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <h2>Shoppy Globe</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;