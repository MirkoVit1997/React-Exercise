import classes from "./Counter.module.scss"
export function CounterDisplay({ counter }) {
  return <h2 className={counter % 2 === 0 ? classes.evenBg : classes.oddBg}>I have counted to {counter}</h2>;
}
