import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "p1",
    price: 6,
    title: "my first Book",
    description: "firstBook i ever read",
  },
  {
    id: "p5",
    price: 7,
    title: "my seconde Book",
    description: "second Book i ever read",
  },
  {
    id: "p3",
    price: 8,
    title: "my Third Book",
    description: "third Book i ever read",
  },
  {
    id: "p4",
    price: 9,
    title: "my fourth Book",
    description: "fourth Book i ever read",
  },
  {
    id: "p5",
    price: 6,
    title: "my fifth Book",
    description: "fifth Book i ever read",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => {
          return (
            <ProductItem
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
        {/* <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
