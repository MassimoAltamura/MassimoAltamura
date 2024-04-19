import { useState } from 'react'

function CounterDisplay({ count }) {
    return <h2>Counter: {count}</h2>;
  }
  
  export function Counter({ initialValue = 0, incrementBy = 1, decrementBy = 1 }) {
    const [counter, setCounter] = useState(initialValue);
  
    const handleIncrement = () => {
      setCounter((c) => c + incrementBy);
    };
  
    const handleDecrement = () => {
      setCounter((c) => c - decrementBy);
    };
  
    const handleReset = () => {
      setCounter(initialValue);
    };
  
    return (
      <div>
        <CounterDisplay count={counter} />
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }