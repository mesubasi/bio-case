import { useEffect, useState } from "react";
import { fetchData } from "../services/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchData(url);
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, err, loading };
};

export default useFetch;
