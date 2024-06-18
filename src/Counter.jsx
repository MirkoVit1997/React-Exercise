import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import classes from "./Counter.module.scss"

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    const previousDirection = directionRef.current;
    let newDirection = null;

    if (counter > initialValue) {
      newDirection = "su";
    } else if (counter < initialValue) {
      newDirection = "giù";
    }

    if (newDirection !== previousDirection) {
      directionRef.current = newDirection;
      if (newDirection) {
        console.log(`La direzione del cambiamento è ${newDirection}`);
      }
    }

    console.log(`Il valore del contatore è ${counter}`);

    return () => {
      console.log(`Il valore del contatore era ${counter}`);
    };
  }, [counter, initialValue]);

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <p className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}> i haved counted {counter}</p>
      <CounterDisplay counter={counter} className={counter % 2 === 0 ? classes.evenBg : classes.oddBg} />
      <button className={classes.button} onClick={handleCounterIncrement}>Incrementa</button>
      <button className={classes.button} onClick={handleCounterDecrement}>Decrementa</button>
      <button className={classes.button} onClick={handleCounterReset}>Resetta</button>
    </div>
  );
}