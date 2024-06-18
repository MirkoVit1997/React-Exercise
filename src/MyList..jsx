import { useState } from "react";
import classes from "./MyList.module.scss"

export function MyList({ items }) {
  const object = {};
  items.forEach((item) => {
    object[item.id] = 0;
  });
  console.log(object);
  const [counters, setCounters] = useState(object);

  function handleIncrementCounters(id) {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [id]: prevCounters[id] + 1,
    }));
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h4>{item.name}</h4>
          <p>{item.age} years old</p>
          <button
          className={classes.button}
            onClick={() => {
              handleIncrementCounters(item.id);
            }}
          >
            {counters[item.id] || 0}
          </button>
        </li>
      ))}
    </ul>
  );
}
