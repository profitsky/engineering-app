import React, { useContext } from 'react';
// import { motion } from 'framer-motion';

// STYLED ELEMENTS
import {
  MainWrapper,
  MainBackGround,
  MainOverlay,
} from './MainContentContainer.styles';

//COMPONENTS
import Routes from '../../Routes';

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
