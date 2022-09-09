import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState (null);
   

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        .then(response => {
            console.log (response);
            if (!response.ok) {
                throw Error ("Fetch non trovato!");
    
            }
           return response.json();
        })
        .then(data => {
           setData(data);
           setIsPending(false);
           setError(null);
       })
        .catch(error => {
        setIsPending(false);
        setError(error.message);
       })
      }, 1000);
    }, [url]);

    return{ data, isPending, error }
    
}

export default useFetch;