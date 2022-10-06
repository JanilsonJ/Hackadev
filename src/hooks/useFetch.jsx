import { useEffect, useState } from "react";

export default function useFetch(path, options = null) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        if (!path){
            setIsFetching(false);
            return
        }
        
        const api = process.env.REACT_APP_API_URL.replaceAll('"', '') + path;

        fetch(api, options)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setData(null);
            setError(err);
        })
        .finally(() => {
            setIsFetching(false)
        });
    }, [path, options]);

    const refetch = async () => {
        setData(null);
        setError(null);
        setIsFetching(true);

        const api = process.env.REACT_APP_API_URL.replaceAll('"', '') + path;

        await fetch(api, options)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false)
        });
    }

    return { data, error, isFetching, refetch };
}