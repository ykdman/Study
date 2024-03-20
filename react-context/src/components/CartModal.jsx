import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/shoping-cart-context";
import Cart from "./Cart";

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();
  const { items, updateCartItemQuantity } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={items} onUpdateItemQuantity={updateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
