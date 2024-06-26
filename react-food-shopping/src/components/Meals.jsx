import { useEffect, useState } from "react";

import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp.js";

import Error from "./Error.jsx";

const requestConfig = {};

// Meal Containser Component
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  console.log(loadedMeals);

  // useEffect(() => {
  //   /**
  //    * useEffect 롤 'fetchMeals'를 함수 선언 및 호출을 하면서
  //    * 부수효과를 제거 할 수 있다.
  //    * useEffect 내부에 함수 선언 까지 한것은, fetchMeals가 useEffect 내에서만
  //    * 동작하기 때문엔 선언도 내부에서 해도 괜찮다.
  //    *  */
  //   async function fetchMeals() {
  //     // GET meals Data
  //     const mealsResponse = await fetch("http://localhost:3000/meals", {
  //       method: "GET",
  //     });

  //     const mealDatas = await mealsResponse.json();
  //     setLoadedMeals(mealDatas);
  //   }
  //   fetchMeals();
  // }, []);
  if (isLoading) {
    return <p className="center"> Fetching meal data...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch Meals" message={error.message} />;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem mealItem={meal} key={meal.id} />
      ))}
    </ul>
  );
}
