import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const storeDispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    storeDispatch({ type: "increment" });
  };

  const decrementHandle = () => {
    storeDispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandle}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
