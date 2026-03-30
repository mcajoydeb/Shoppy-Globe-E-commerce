import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}

export default useProducts;