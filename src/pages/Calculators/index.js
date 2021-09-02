import React, { useContext, useEffect, useRef, useState } from 'react';

// IMAGES
import calcMenuLayout from '../../images/calcMenuLayout.svg';

// STYLED ELEMENTS
import {
  CalcWrapper,
  CalcSceneWrapper,
  CalcScene,
  CalcOverlay,
} from './Calculators.styles';

//COMPONENTS
import FitsAndTolerances from './FitsAndTolerances';
import Light from '../../components/Ui/Light';
import HudUiFrame from '../../components/HudUiFrame';
import HexagonGrid from '../../components/Ui/HexagonGrid';

//CONTEX
import OverlayContext from '../../context/overlayConext';

//HOOKS
import useMousePosition from '../../hooks/useMousePosition';
import HexagonShape from '../../components/Ui/HexagonShape';

//HELPERS
import svgConverter from './../../helpers/svgConverter';

const Calculators = () => {
  const darkOverlay = useContext(OverlayContext);
  const mainContainerData = useRef();

  // const mousePosition = useMousePosition(mainContainerData);
  const [containerWidth, setContainerWidth] = useState();
  const [containerHeight, setContainerHeight] = useState();

  useEffect(() => {
    darkOverlay.onChange(true);

    const listener = () => {
      setContainerWidth(mainContainerData.current.clientWidth);
      setContainerHeight(mainContainerData.current.clientHeight);
    };
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  return (
    <CalcWrapper ref={mainContainerData}>
      <CalcOverlay></CalcOverlay>

      <CalcSceneWrapper>
        {/* <Light mousePosition={mousePosition} /> */}

        <CalcScene>
          <HexagonGrid />
          {/* <FitsAndTolerances></FitsAndTolerances> */}
          {/* <HudUiFrame />
      <Light mousePosition={mousePosition} /> */}
          {/* <HexagonShape /> */}
        </CalcScene>
      </CalcSceneWrapper>
    </CalcWrapper>
  );
};

export default Calculators;
