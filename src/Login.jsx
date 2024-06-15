import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData(createData());
  }

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
        onChange={handleInputChange}
      ></input>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      ></input>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      ></input>
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={handleResetForm}>Reset</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
