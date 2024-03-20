import { useState } from "react";

import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import { CartContext } from "./store/shoping-cart-context.jsx";
import Product from "./components/Product.jsx";
import CartContextProvider from "./store/shoping-cart-context.jsx";

function App() {
  // context Value

  return (
    <CartContextProvider>
      <Header />
      {/* <Shop onAddItemToCart={handleAddItemToCart} /> */}
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
