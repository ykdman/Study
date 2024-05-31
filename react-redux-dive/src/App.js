import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "./store/cartUi.slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.cartUi.notification);
  const disPatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      // cart data send : Pending 상태
      disPatch(
        cartUiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );
      const response = await fetch(
        "https://react-practice-b475c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending Cart data Failed");
      }

      // cart data send : success 상태
      disPatch(
        cartUiActions.showNotification({
          status: "success",
          title: "Success !!",
          message: "Sent cart Data Successfully!",
        })
      );
    };

    // 첫 렌더링 과정은 firebase 데이터 입력 과정 제외
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      disPatch(
        cartUiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    });
  }, [cart, disPatch]);

  return (
    <Fragment>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
