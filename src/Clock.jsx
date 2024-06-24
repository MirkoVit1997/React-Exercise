import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext)

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
      <h2>{language === "en" ? "Current time:" +date.toLocaleTimeString() : "Ora corrente:" +date.toLocaleTimeString()}</h2>
    </div>
  );
}
