import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../store/cartUi.slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartTotalQty = useSelector((state) => state.cart.totalQty);

  const disPatch = useDispatch();

  const toggleCartHandler = () => {
    disPatch(cartUiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQty}</span>
    </button>
  );
};

export default CartButton;
