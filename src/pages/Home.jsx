import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2 className="p-4 text-xl font-bold">Products</h2>
      <ProductList products={products} /> {/* ✅ IMPORTANT */}
    </div>
  );
}

export default Home;