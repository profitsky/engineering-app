import React, { useContext, useEffect } from 'react';

//STYLES
import { HomeWrapper } from './Home.styles';

//CONTEX
import OverlayContext from '../../context/overlayConext';

const Home = () => {
  const darkOverlay = useContext(OverlayContext);
  console.log('ZAMONTOWANY');

  useEffect(() => {
    darkOverlay.onChange(false);
  }, []);

  return (
    <HomeWrapper>
      <h1>HOME</h1>
    </HomeWrapper>
  );
};

export default Home;
