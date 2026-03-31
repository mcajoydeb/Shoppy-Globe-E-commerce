import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList({ products }) {
  const searchTerm = useSelector((state) => state.cart.searchTerm);

  const filteredProducts = (products || []).filter((product) =>
  product.title
    ?.toLowerCase()
    .includes((searchTerm || "").toLowerCase())
);


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;