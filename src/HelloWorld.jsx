import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function HelloWorld() {
  const language = useContext(LanguageContext)

  return <h2>{language === "en" ? "Hello, World!" : "Ciao, mondo!"}</h2>
}
