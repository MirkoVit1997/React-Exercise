import { AlertClock } from "./AlertClock";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <HelloWorld />
      <Welcome name="John" age={45} />
      <AlertClock />
    </div>
  );
}
