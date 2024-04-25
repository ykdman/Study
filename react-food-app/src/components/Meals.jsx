import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  // meals 데이터를 받아올 state
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    // useEffect 내부에서만 수행 되는 함수
    // meals fetch 함수
    async function fetchMeals() {
      const mealsData = await fetch("http://localhost:8888/meals");
      if (!mealsData.ok) {
        throw new Error("fail to fetching meals data");
      }

      const meals = await mealsData.json();
      setLoadedMeals(meals);
    }

    // meals fetch 함수 실행
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {!loadedMeals.length === 0 && (
        <li key={loadedMeals.id}>{loadedMeals.name}</li>
      )}
    </ul>
  );
}
