import { useEffect, useState } from 'react';

/**
 * Custom hook to check if the component is mounted.
 * @returns A boolean indicating if the component is mounted.
 */
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
};

export default useIsMounted;
