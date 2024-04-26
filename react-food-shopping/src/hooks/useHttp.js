import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      resData.message || "Somthing went wrong, faild to send request"
    );
  }
  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(initialData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (err) {
        setError(error.message || "Something went Wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    /**
     * config 존재하면서 &&
     * (config.method === 'GET' 이거나 config.method가 존재하지 않거나) 또는
     * config가 존재하지 않거나
     */
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
