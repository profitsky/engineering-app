import React from 'react';

import Routes from '../../Routes';

// STYLED ELEMENTS
import { MainWrapper, MainBackGround } from './MainContainer.styles';

// IMAGES
import BCKGimage from '../../images/background-image.jpg';

const MainContainer = () => {
  return (
    <MainWrapper>
      <MainBackGround src={BCKGimage} />
      <Routes />
    </MainWrapper>
  );
};

export default MainContainer;
