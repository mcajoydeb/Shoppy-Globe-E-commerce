import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";

function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="p-4 text-xl font-bold">Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;