import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Setting up clock interval");
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      console.log("Clearing clock interval");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Current time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
