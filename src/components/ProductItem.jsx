function ProductItem({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>      
      <button onClick={() => console.log(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;