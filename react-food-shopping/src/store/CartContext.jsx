import { createContext, useReducer } from "react";

// Context 의 구조 결정
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

// CartContext를 컨트롤 하기 위한 Reducer 함수
function cartReducer(state, action) {
  // ADD_ITEM
  if (action.type === "ADD_ITEM") {
    // update state to add meal item
    console.log(state.items);
    /**기존 state의 items 중 추가하려는 item이 있는지 확인하기 위해
     * findIndex 로 Index 찾기
     * true = Index, false = -1 반환
     * */
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 순수성을 위한 items 얕은 복사
    const updatedItems = [...state.items];
    console.log(updatedItems);

    if (existingCartItemIndex > -1) {
      // 이미 items 에 추가하려는 item이 존재 할때
      // 존재하는 item 을 items 에서 뽑아온다.
      const existingItem = state.items[+existingCartItemIndex];
      // 추가하려는 item을 새로운 객체로 만들어 기존 property들은 놔두고 quantity 만 증가 시킨다.
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // 추가하려는 item이 items 에 있지 않을 때
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    // reducer의 업데이트 된 state를 반환
    return { ...state, items: updatedItems };
  }

  // REMOVE_ITEM
  if (action.type === "REMOVE_ITEM") {
    // remove item From state
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // 존재 하는 Cart Item을 할당
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    /**
     * 존재하는 Item의 quantity가 1일 때는 해당 Item을 지워야 한다
     * quantity가 1일 아닐 때는 , 그 숫자를 감소시키기만 하면된다.
     */
    if (existingCartItem.quantity === 1) {
      // 존재하는 item의 quantity가 1일 때,
      updatedItems.splice(existingCartItemIndex, 1); // 해당 아이템 삭제
    } else {
      const existingItem = state.items[existingCartItemIndex];
      // 추가하려는 item을 새로운 객체로 만들어 기존 property들은 놔두고 quantity 만 감소시킨다.
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      // items 업데이트
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  // 어떠한 action에도 해당되지 않으면 기존state 반환
  return state;
}

// Provider 함수 작성
export function CartContextProvider({ children }) {
  // 사용할 Reducer 함수를 지정해준다.
  // 두번째 인수는 처음 호출 될때의 첫 state 이다.
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });
  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
