import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

/**
 * Meals 내 표시될 MealItem 컴포넌트
 * arg1 : mealItem
 * */
export default function MealItem({ mealItem }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(mealItem);
  }

  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${mealItem.image}`}
          alt={mealItem.name}
        />
        <div>
          <h3>{mealItem.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(mealItem.price)}
          </p>
          <p className="meal-itme-description">{mealItem.description}</p>
        </div>
        <p className="meal-item-actions">
          {/* <button>Add to Cart</button> */}
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
