import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`The value of the counter is${counter}`);

    return () => {
      console.log(`The value of the counter was ${counter}`);
    };
  }, [counter]);

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => {
      return c - 1;
    });
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
