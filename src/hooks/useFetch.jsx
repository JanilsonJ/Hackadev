import { useEffect, useState } from "react";

export default function useFetch(path, options = null) {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const api = process.env.REACT_APP_API_URL.replaceAll('"', '') + path;

        fetch(api, options)
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
    }, [path, options]);

    return { data, error, isFetching };
}