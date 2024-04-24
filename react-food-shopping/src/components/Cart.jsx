import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

import { useContext } from "react";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotalPrice = cartCtx.items.reduce((total, current) => {
    return (total += current.price * current.quantity);
  }, 0);

  const userProgressCtx = useContext(UserProgressContext);
  const cartModalOpen = userProgressCtx.progress === "cart";
  console.log(`cart modal open : ${cartModalOpen}`);

  return (
    <Modal className="cart" open={cartModalOpen}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
