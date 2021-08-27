import React, { useContext, useEffect, useRef, useState } from 'react';

// STYLED ELEMENTS
import { CalcWrapper } from './Calculators.styles';

//COMPONENTS
import FitsAndTolerances from './FitsAndTolerances';
import Light from '../../components/Ui/Light';

//CONTEX
import OverlayContext from '../../context/overlayConext';

//HOOKS
import useMousePosition from '../../hooks/useMousePosition';

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
      {/* <FitsAndTolerances></FitsAndTolerances> */}
      <Light mousePosition={mousePosition} />
    </CalcWrapper>
  );
};

export default Calculators;
