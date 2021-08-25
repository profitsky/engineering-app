import React, { useContext, useEffect } from 'react';

//COMPONENTS
import HudIFrame from '../../components/HudUiFrame';

import { CalcWrapper } from './Calculators.styles';

//CONTEX
import OverlayContext from '../../context/overlayConext';

const Calculators = () => {
  const darkOverlay = useContext(OverlayContext);

  useEffect(() => {
    darkOverlay.onChange(true);
  }, []);

  return (
    <CalcWrapper>
      <HudIFrame></HudIFrame>;
    </CalcWrapper>
  );
};

export default Calculators;
