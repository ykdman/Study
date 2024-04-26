import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";

import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (result, item) => result + item.quantity * item.price,
    0
  );

  function handleFinishi() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handelSubmit(event) {
    // form 리 렌더링 방지
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    console.log(customerData);

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );

    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items: cartCtx.items,
    //       customer: customerData,
    //     },
    //   }),
    // });
  }

  let actions = (
    <>
      <Button textOnly onClick={userProgressCtx.hideCheckout}>
        Close
      </Button>
      <Button onClick={userProgressCtx.hideCheckout}>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending Order ... </span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinishi}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>

        <p className="modal-actions">
          <Button onClick={handleFinishi}>OK</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={
        userProgressCtx.progress === "checkout"
          ? userProgressCtx.hideCheckout
          : null
      }
    >
      <form onSubmit={handelSubmit}>
        <h2>Chekcout</h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && (
          <Error title="Failed to submit order" message={error.message} />
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
