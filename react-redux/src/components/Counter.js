import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const storeDispatch = useDispatch();
  const toggleCounterHandler = () => {
    storeDispatch({ type: 'showcounter' });
  };

  const incrementHandler = () => {
    storeDispatch({ type: 'increment' });
  };

  const decrementHandle = () => {
    storeDispatch({ type: 'decrement' });
  };

  const increaseHandler = (step) => {
    storeDispatch({ type: 'increase', step });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increment By 5</button>
        <button onClick={decrementHandle}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
