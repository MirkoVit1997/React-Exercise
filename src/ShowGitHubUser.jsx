import React from 'react';
import { useParams } from "react-router-dom";
import { GithubUser } from "./GitHubUser";

export function ShowGitHubUser() {
    const {username} = useParams()
    return(
        <div>
            <GithubUser username={username} />
        </div>
    )
}