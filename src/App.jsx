import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { FocusInput } from "./FocusInput";
import { HelloWorld } from "./HelloWorld";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { PrintEffect } from "./PrintEffect";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";


export function App() {
  function onLogin (data) {
    console.log(data)
  }
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
      <Login onLogin={onLogin} />
      <UncontrolledLogin />
      <FocusInput />
      <PrintEffect />
    </div>
  );
}
