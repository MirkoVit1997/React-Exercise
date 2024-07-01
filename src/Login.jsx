import { useForm } from "./UseForm";


export function Login({ onLogin }) {
  const [data, change, reset] = useForm()
  
  function handleLogin(event) {
    event.preventDefault();
    onLogin(data);
  }
  

  return (
    <form onSubmit={handleLogin}>
      <h1>My Form</h1>
      <input
        name="username"
        value={data.username}
        onChange={change}
      ></input>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={change}
      ></input>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={change}
      ></input>
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={reset}>Reset</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
