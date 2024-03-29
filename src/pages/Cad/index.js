import React, { useContext, useEffect } from 'react';

//CONTEX
import OverlayContext from '../../context/overlayConext';

const Cad = () => {
  const darkOverlay = useContext(OverlayContext);

  useEffect(() => {
    darkOverlay.onChange(true);
  }, []);
  return <h1>CAD GENERATORS</h1>;
};

export default Cad;
