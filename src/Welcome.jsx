import { Age } from "./Age";

export function Welcome({ name, age }) {
  const WelcomeStyle = {
    backgroundColor:name ? "greenyellow" : "darkgrey",
    border: "2px solid red",
  }
  return (
    <div style={WelcomeStyle}>
      <h2>Welcome, {name}!</h2>
      <Age age={age} />
      {age >= 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age >= 18 && age <= 65 && <Age age={age} />}
      {age >= 18 && age <= 65 && name === "John" && <Age age={age} />}
    </div>
  );
}
