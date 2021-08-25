import React, { useState, useRef, useLayoutEffect } from 'react';

import PIC from '../../images/background-image.jpg';
import HUD from '../../components/HudUiFrame/index';

//STYLES
import {
  CaruselMenuWrapper,
  CaruselContainer,
  CaruselMain,
  CaruselBottomWall,
  CaruselSideWall,
  WallImage,
} from './CaoruselMenu.styles';

const CaruselMenu = () => {
  const targetRef = useRef();
  const [width, setWidth] = useState();
  const [percentage, setPercentage] = useState();
  const caruselScreenNumber = 1;

  useLayoutEffect(() => {
    setWidth(targetRef.current.offsetWidth);
    setPercentage(percentageRatio(caruselScreenNumber));
  }, [width]);

  const percentageRatio = (screenNumber) => {
    const angleBetweenScreens = 360 / screenNumber;
    const radians = angleBetweenScreens * (Math.PI / 180);
    const cellWidth = 100 * Math.tan(radians / 2);
    return cellWidth * 2;
  };

  const caruselRender = () => {
    const arr = [];
    const angleBetweenScreen = 360 / caruselScreenNumber;
    let rotation = 0;
    let imageTranslation = 0;

    for (let i = 0; i < caruselScreenNumber; i++) {
      rotation = i * angleBetweenScreen;
      imageTranslation += 3;
      console.log(imageTranslation);
      arr[i] = (
        <CaruselSideWall
          key={i}
          angle={rotation}
          percentage={percentage}
          distance={width}
        >
          <WallImage src={HUD} percentage={imageTranslation}></WallImage>
        </CaruselSideWall>
      );
    }

    return arr;
  };

  return (
    <CaruselMenuWrapper ref={targetRef}>
      <CaruselContainer>
        <CaruselMain>
          <CaruselBottomWall src={PIC} alt='login'></CaruselBottomWall>
          {caruselRender()}
        </CaruselMain>
      </CaruselContainer>
    </CaruselMenuWrapper>
  );
};

export default CaruselMenu;
