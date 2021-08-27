import { useState, useLayoutEffect } from 'react';

const useResizeContainer = (ref, initialValue = 0) => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
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
