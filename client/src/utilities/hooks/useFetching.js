import { useState } from "react";


export const useFetching = (callback) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const fetching = async (...params) => {
        setLoading(true);
        let result={isSucceed:false}
        try {
            await callback(...params);
            result.isSucceed=true;
        } catch (error) {
            (error)
            setError(error.response.data)
        }
        finally {
            setLoading(false);
            return result;
        }
    }

    return [fetching, loading, error];
}