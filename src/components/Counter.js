import React, {useState} from 'react';

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count += 1)
  }

  const decrement = () => {
    setCount(count -= 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;