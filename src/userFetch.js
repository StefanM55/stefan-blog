import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if(!res.ok){
            throw Error('fetch failed')
          }
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError'){
            console.log('fetch aborted');
          }
          setIsPending(false);
          setError(err.message);
        })
    }, 1000); //simulare incarcare de 1s cu setTimeout pentru vizionare mesaj Loading

    return () => abortCont.signal;
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;