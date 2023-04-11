import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, method, body) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();

      if (method !== "DELETE") setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (url) => await fetchData(url, "GET");

  const postData = async (url, body) => await fetchData(url, "POST", body);

  const putData = async (url, body) => await fetchData(url, "PUT", body);

  const deleteData = async (url) => await fetchData(url, "DELETE");

  return { data, error, loading, getData, postData, putData, deleteData };
};
