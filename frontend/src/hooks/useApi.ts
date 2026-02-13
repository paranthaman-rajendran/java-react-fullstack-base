import { useState, useEffect } from 'react';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<T>(fetchFn: () => Promise<T>): UseApiState<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    fetchFn()
      .then((data) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((err) => {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : 'Unknown error',
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [fetchFn]);

  return state;
}
