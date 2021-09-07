import React, { useContext, useEffect, useRef, useState } from 'react';

// STYLED ELEMENTS
import {
  CalcWrapper,
  CalcSceneWrapper,
  CalcScene,
  CalcOverlay,
} from './Calculators.styles';

//COMPONENTS

import Light from '../../components/Ui/Light';

import HexagonGrid from '../../components/Ui/HexagonGrid';

//CONTEX
import OverlayContext from '../../context/overlayConext';

//HOOKS
import useMousePosition from '../../hooks/useMousePosition';
import HexagonShape from '../../components/Ui/HexagonShape';

const Calculators = () => {
  const darkOverlay = useContext(OverlayContext);
  const mainContainerData = useRef();

  const mousePosition = useMousePosition(mainContainerData);
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
        <Light mousePosition={mousePosition} />

        <CalcScene>
          <HexagonGrid />
          {/* <Light mousePosition={mousePosition} /> */}
        </CalcScene>
      </CalcSceneWrapper>
    </CalcWrapper>
  );
};

export default Calculators;
