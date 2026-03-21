import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  return <h2>Product Detail for ID: {id}</h2>;
}

export default ProductDetail;