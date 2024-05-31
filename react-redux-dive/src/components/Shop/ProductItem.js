import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart.slice";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const item = {
    id,
    title,
    price,
  };
  const disPatch = useDispatch();

  const addtoCartHandler = () => {
    console.log({ id: item.id, price: item.price, title: item.title });
    disPatch(
      cartActions.addItemToCart({
        id: item.id,
        price: item.price,
        title: item.title,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
