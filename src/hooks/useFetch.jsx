import { useEffect, useState } from "react";

export default function useFetch(url, options = null) {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`, options)
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
    }, [url, options]);

    return { data, error, isFetching };
}