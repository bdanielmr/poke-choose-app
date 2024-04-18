import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: ()=>void;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      const pokemon : any= {
        name: result?.name,
        image: result?.sprites?.front_default,
        color: result?.types?.[0]?.type?.name,
      }
      setData(pokemon);
      setLoading(false);
    } catch (error:any) {
      setError(error.message || 'An error occurred');
      setLoading(false);
    }
  }

  return { data, loading, error,fetchData };
}

export default useFetch;
