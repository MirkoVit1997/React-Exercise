import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import classes from "./Counter.module.scss"
import { UseCounter } from "./UseCounters";


export function Counter({ initialValue }) {
  const directionRef = useRef(null);
  const {counter, onDecrement, onIncrement, onReset} = UseCounter()



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

 

  return (
    <div>
      <p className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}> i haved counted {counter}</p>
      <CounterDisplay counter={counter} />
      <button className={classes.button} onClick={onIncrement}>Incrementa</button>
      <button className={classes.button} onClick={onDecrement}>Decrementa</button>
      <button className={classes.button} onClick={onReset}>Resetta</button>
    </div>
  );
}