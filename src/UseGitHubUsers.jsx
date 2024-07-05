import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function UseGitHubUsers(username) {
  const { data, error, mutate } = useSWR(
   username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function fetchGitHubUser() {
    mutate()
  }

  return {
    user: data,
    error,
    loading: !data && !error,
    onFetchUser: fetchGitHubUser,
  };
}
