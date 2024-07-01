import { useRef, useState } from "react";
import { GithubUser } from "./GitHubUser";

export function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current?.value) {
      setUsers([...users, inputRef.current.value]);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}></input>
        <button>Submit</button>
      </form>
      {users.map((user) => (
        <GithubUser key={user} username={user} />
      ))}
    </div>
  ); 
}
