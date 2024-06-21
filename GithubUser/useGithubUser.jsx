import { useEffect, useState } from "react";

export function useGithubUser(initialUsername) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchGithubUser(username) {
        setLoading(true);
        setError(null);
        setData(null);
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.status !== 200) {
                throw new Error('User not found');
            }
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    // Automatically fetch user data when initialUsername is provided
    useEffect(() => {
        if (initialUsername) {
            fetchGithubUser(initialUsername);
        }
    }, [initialUsername]);

    return { data, error, loading, onFetchUser: fetchGithubUser };
}
