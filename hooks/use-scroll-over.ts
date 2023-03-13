import { useEffect } from 'react';

const useScrollOver = (cb: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', cb);
    return () => window.removeEventListener('scroll', cb);
  }, [cb]);
};

export default useScrollOver;
