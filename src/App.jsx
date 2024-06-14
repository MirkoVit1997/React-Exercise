import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <HelloWorld />
      <Welcome name="John" age={45} />
      <AlertClock />
      <Counter initialValue={26} />
      <Clock />
      <MouseClicker />
      <Login />
    </div>
  );
}
