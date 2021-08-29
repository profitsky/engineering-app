import React, { useEffect, useRef, useState } from 'react';

//STYLED COMPONENTS
import { LightMainContainer, LighBoxShadow } from './Light.styles';

const Light = ({ mousePosition }) => {
  const { mousePositionX, mousePositionY } = mousePosition;
  const [lightPositionX, setLightPositionX] = useState(mousePositionX);
  const [lightPositionY, setLightPositionY] = useState(mousePositionY);

  const lightContainer = useRef(null);

  const mergeMousePositionAndLight = () => {
    setLightPositionX(
      mousePositionX - lightContainer.current.getBoundingClientRect().left
    );
    setLightPositionY(
      mousePositionY - lightContainer.current.getBoundingClientRect().top
    );
  };

  useEffect(() => {
    console.log(lightContainer.current.getBoundingClientRect().left);
    mergeMousePositionAndLight();
  });

  return (
    <LightMainContainer ref={lightContainer}>
      <LighBoxShadow
        style={{
          transform: `translate(${lightPositionX}px, ${lightPositionY}px)`,
        }}
      />
    </LightMainContainer>
  );
};

export default Light;
