import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart.slice";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const disPatch = useDispatch();

  const removeFromCartHandler = () => {
    disPatch(cartActions.removeItemFromCart({ id }));
  };

  const addToCartHandeler = () => {
    disPatch(cartActions.addItemToCart({ id, price, title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandeler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
