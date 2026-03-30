import useProducts from "../hooks/useProducts";

function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default ProductList;