import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2 className="p-6">Loading product...</h2>;
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded shadow mt-6">

      {/* LEFT: IMAGE */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded"
        />
      </div>

      {/* RIGHT: DETAILS */}
      <div className="flex flex-col justify-between">

        <div>
          <h1 className="text-2xl font-bold mb-2">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-4">
            {product.brand}
          </p>

          <p className="text-xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>
        </div>

        {/* ADD TO CART */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductDetail;