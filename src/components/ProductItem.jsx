import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover rounded"
      />

      

      <h3 className="mt-2 font-semibold">
        <Link to={`/product/${product.id}`} className="hover:underline">
          {product.title}
        </Link>
      </h3>

      <p className="text-gray-600">${product.price}</p>

      <button
        className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;