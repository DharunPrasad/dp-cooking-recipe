import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  const [options, setOptions] = useState(null)
  

  const postData = (data) => {
    //UPDATING OPTIONS STATE
    setOptions({
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    })

  }

  useEffect(() => {
    const controller = new AbortController();

    const dataFetch = async (fetchData) => {
      setIspending(true);

      try {
        const res = await fetch(url, fetchData);
        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
      

        setIspending(false);
        setData(data);
      } catch (err) {
        setIspending(false);
        setError("oops");
      }

    };
    if(method === "GET"){
    dataFetch();
    }
    if(method === "POST" && options){
      dataFetch(options);
    }

    controller.abort();
  }, [url, method, options]);

  return { data, isPending, error, postData };
};
