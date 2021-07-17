import React from 'react';

// STYLED ELEMENTS
import { MainWrapper, MainBackGround } from './MainContainer.styles';

// IMAGES
import BCKGimage from '../../images/background-image.jpg';

const MainContainer = () => {
  return (
    <MainWrapper>
      <MainBackGround src={BCKGimage} />
    </MainWrapper>
  );
};

export default MainContainer;
