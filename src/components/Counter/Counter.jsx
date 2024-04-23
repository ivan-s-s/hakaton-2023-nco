import React, { useState } from 'react';
import classes from './Counter.module.css';

export const Counter = (props) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment} className={classes.myButton}>
        +
      </button>
      <button onClick={decrement} className={classes.myButton}>
        -
      </button>
    </div>
  );
};
