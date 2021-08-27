import { useState, useEffect } from 'react';

const useResizeContainer = (ref) => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    const listener = () => {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    };

    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });
  return {
    width,
    height,
  };
};

export default useResizeContainer;
