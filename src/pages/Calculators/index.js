import React, { useContext, useEffect, useRef, useState } from 'react';

// STYLED ELEMENTS
import {
  CalcWrapper,
  CalcSceneWrapper,
  CalcScene,
  CalcOverlay,
} from './Calculators.styles';

//ICONS
import { ReactComponent as RetainingRings } from '../../images/RetainingIcon.svg';
import { ReactComponent as FitsAndTolerancesIcon } from '../../images/FitsIcon.svg';
import { ReactComponent as CouterboreAndCountersinkIcon } from '../../images/CboreIcon.svg';

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
  const mainContainerData = useRef();

  const mousePosition = useMousePosition(mainContainerData);

  useEffect(() => {
    darkOverlay.onChange(true);
  }, []);

  return (
    <CalcWrapper ref={mainContainerData}>
      <CalcSceneWrapper>
        <CalcOverlay></CalcOverlay>
        <Light mousePosition={mousePosition} />
        <CalcScene>
          <HexagonGrid></HexagonGrid>
          <HexagonIcon>
            <RetainingRings />
          </HexagonIcon>
          <HexagonIcon>
            <FitsAndTolerancesIcon />
          </HexagonIcon>
          <HexagonIcon>
            <CouterboreAndCountersinkIcon />
          </HexagonIcon>
        </CalcScene>
      </CalcSceneWrapper>
    </CalcWrapper>
  );
};

export default Calculators;
