import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        GoTo <Link to="/products">The List Of Products Page</Link>.
      </p>
    </>
  );
}
