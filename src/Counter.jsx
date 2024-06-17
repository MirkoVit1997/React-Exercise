import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef("");
  const previousDirectionRef = useRef("");

  useEffect(() => {
    console.log(`The value of the counter is${counter}`);

    return () => {
      console.log(`The value of the counter was ${counter}`);
    };
  }, [counter]);

  function handleCounterIncrement() {
    setCounter((c) => {
      directionRef.current = c < counter ? "su" : "giu";
      return c + 1;
    });

    function handleCounterDecrement() {
      setCounter((c) => {
        directionRef.current = c > counter ? "giu" : "su";
        return c - 1;
      });
    }

    function handleCounterReset() {
      setCounter(initialValue);
    }

    useEffect(() => {
      if (directionRef.current != previousDirectionRef.current) {
        console.log("nuova direzione:", directionRef.current);
        previousDirectionRef.current = directionRef.current;
      }
    }, []);

    return (
      <div>
        <p>Direzione: {directionRef.current}</p>
        <CounterDisplay counter={counter} />
        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
      </div>
    );
  }
}
