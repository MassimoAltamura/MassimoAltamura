import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
    const { data, loading, error, onFetchUser } = useGithubUser(username);

    function handleGetUserData() {
        onFetchUser(username);
    }

    return (
        <div>
            <button onClick={handleGetUserData}>Load user data</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.login}</h1>}
        </div>
    );
}
