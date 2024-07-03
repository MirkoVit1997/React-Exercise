// GitHubUsersList.jsx
import React, { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function GithubUsersList() {
  const [users, setUsers] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>GitHub Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
