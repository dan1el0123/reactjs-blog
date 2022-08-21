import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          signal: controller.signal,
        });
        setData(response.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(dataUrl);

    return () => controller.abort();
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
