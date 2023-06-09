import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "b7f68cfc00mshfaa4458e8de9e66p12495ejsn950150b92a60",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Error Occured (-_- ;)");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  const reFetch =()=>{
    setIsLoading(true);
    fetchData();
  }
  return {data, isLoading, error, reFetch};
};
export default useFetch;
