import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (result, item) => result + item.quantity * item.price,
    0
  );

  function handleCartClose() {
    userProgressCtx.hideCart();
  }

  function handleGotoCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCartClose : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            quantity={item.quantity}
            name={item.name}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCartClose}>
          Close
        </Button>
        {cartCtx.items.length !== 0 && (
          <Button onClick={handleGotoCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
