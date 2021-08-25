import React, { useContext, useEffect } from 'react';

//CONTEX
import OverlayContext from '../../context/overlayConext';

const About = () => {
  const darkOverlay = useContext(OverlayContext);

  useEffect(() => {
    darkOverlay.onChange(false);
  }, []);

  return <h1>ABOUT</h1>;
};

export default About;
