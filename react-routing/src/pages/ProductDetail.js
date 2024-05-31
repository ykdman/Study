import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "./Products";

function ProductDetail() {
  const params = useParams();
  const product = PRODUCTS.find((prod) => prod.id === params.productId);

  return (
    <>
      <h1>Product Detail</h1>
      <p>{product.title}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}

export default ProductDetail;
