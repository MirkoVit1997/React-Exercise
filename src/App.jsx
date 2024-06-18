import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusInput } from "./FocusInput";
import { HelloWorld } from "./HelloWorld";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { MyList } from "./MyList.";
import { PrintEffect } from "./PrintEffect";
import { TodoList } from "./ToDoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";


export function App() {
  function onLogin (data) {
    console.log(data)
  }
  return (
    <div className="app">
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
      <Colors colors={[
        {id: 1, name: "Red",}, 
        {id: 2, name: "Green",}, 
        {id: 3, name: "Grey",}, 
        {id: 4, name: "Blue"}
        ]} />
      <MyList items = {[
        {id: 1, name: "Jane", age: 33}, 
        {id: 2, name: "Kate", age: 20}, 
        {id: 3, name: "John", age: 42}, 
        {id: 4, name: "Billy", age: 53}
        ]} />
        <TodoList />
        
    </div>
  );
}
