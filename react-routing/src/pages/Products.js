import { Link } from "react-router-dom";

export const PRODUCTS = [
  { id: "p1", title: "product1" },
  { id: "p2", title: "product2" },
  { id: "p3", title: "product3" },
];

export default function ProductPage() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
