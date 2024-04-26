import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";

export default function CartItem({
  id,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
}) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="cart-item" key={id}>
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
