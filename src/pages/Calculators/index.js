import React, { useContext, useEffect } from 'react';

// STYLED ELEMENTS
import {
  CalcWrapper,
  CalcSceneWrapper,
  CalcScene,
  CalcOverlay,
} from './Calculators.styles';

//ICONS
import FitsAndTolerancesSvgIcon from '../../components/CalcMenuUi/FitsAndTolerancesSvgIcon';
import CouterboreAndCountersinkIcon from '../../components/CalcMenuUi/CouterboreAndCountersinkSvgIcon';
import RetainingRingsSvgIcon from '../../components/CalcMenuUi/RetainingRingsSvgIcon';

//COMPONENTS
import Light from '../../components/Ui/Light';
import HexagonGrid from '../../components/Ui/HexagonGrid';
import HexagonIcon from '../../components/Ui/HexagonIcon';

//CONTEX
import OverlayContext from '../../context/overlayConext';

//HOOKS
import useMousePosition from '../../hooks/useMousePosition';

const Calculators = () => {
  const darkOverlay = useContext(OverlayContext);

  const mousePosition = useMousePosition();

  useEffect(() => {
    darkOverlay.onChange(true);
  }, []);

  return (
    <CalcWrapper>
      <CalcSceneWrapper>
        <CalcOverlay></CalcOverlay>
        <Light mousePosition={mousePosition} />
        <CalcScene>
          <HexagonGrid />
          <FitsAndTolerancesSvgIcon />
          <CouterboreAndCountersinkIcon />
          <RetainingRingsSvgIcon />
        </CalcScene>
      </CalcSceneWrapper>
    </CalcWrapper>
  );
};

export default Calculators;
