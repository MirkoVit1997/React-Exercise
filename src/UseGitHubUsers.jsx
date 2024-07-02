import { useEffect, useState } from "react";

export function UseGitHubUsers(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [username]);

  return {
    user,
    error,
    loading,
  };
}
