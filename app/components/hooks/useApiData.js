import React, { useState, useEffect } from 'react';

function useDataFetching(apiUrl) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
    return () => setData(null);
  }, [apiUrl]);

  return { data, loading };
}

export default useDataFetching;
