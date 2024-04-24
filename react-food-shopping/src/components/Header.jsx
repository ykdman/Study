import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

import CartContext from "../store/CartContext";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((total, current) => {
    return (total += current.quantity);
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  function handleHideCart() {
    userProgressCtx.hideCart();
  }

  return (
    // header
    <header id="main-header">
      {/* title & image */}
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>React Food!</h1>
      </div>
      {/* Cart Butotn */}
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
