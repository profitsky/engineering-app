import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import Routes from '../../Routes';

// STYLED ELEMENTS
import {
  MainWrapper,
  MainBackGround,
  MainOverlay,
} from './MainContentContainer.styles';

//CONTEX
import OverlayContext from '../../context/overlayConext';

// IMAGES
import BCKGimage from '../../images/background-image.jpg';

const MainContentContainer = () => {
  const darkOverlay = useContext(OverlayContext);

  return (
    <MainWrapper>
      <MainBackGround src={BCKGimage} />
      <MainOverlay darkOverlay={darkOverlay.isOverlayDark} />
      <Routes />
    </MainWrapper>
  );
};

export default MainContentContainer;
