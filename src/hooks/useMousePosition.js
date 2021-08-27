import React, { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    mousePositionX: null,
    mousePositionY: null,
  });

  useEffect(() => {
    const listener = (e) => {
      setMousePosition({
        mousePositionX: e.clientX,
        mousePositionY: e.clientY,
      });
    };
    window.addEventListener('mousemove', listener);
    return () => window.removeEventListener('mousemove', listener);
  });
  console.log(mousePosition);
  return mousePosition;
};

export default useMousePosition;
