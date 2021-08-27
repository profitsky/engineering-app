import React, { useContext, useEffect, useRef, useState } from 'react';

// STYLED ELEMENTS
import { CalcWrapper } from './Calculators.styles';

//COMPONENTS
import FitsAndTolerances from './FitsAndTolerances';

//CONTEX
import OverlayContext from '../../context/overlayConext';

//HOOKS
import useMousePosition from '../../hooks/useMousePosition';
import useResizeContainer from '../../hooks/useResizeContainer';

const Calculators = () => {
  const darkOverlay = useContext(OverlayContext);
  const mainContainerData = useRef();
  const dimensions = useResizeContainer(mainContainerData);
  useMousePosition(mainContainerData);
  const [containerWidth, setContainerWidth] = useState();
  const [containerHeight, setContainerHeight] = useState();

  useEffect(() => {
    darkOverlay.onChange(true);

    if (!containerHeight || containerWidth) {
      setContainerHeight(mainContainerData.current.clientHeight);
      setContainerWidth(mainContainerData.current.clientWidth);
    } else {
      setContainerHeight(dimensions.height);
      setContainerWidth(dimensions.width);
    }
  }, []);

  return (
    <CalcWrapper ref={mainContainerData}>
      {/* <FitsAndTolerances></FitsAndTolerances> */}
    </CalcWrapper>
  );
};

export default Calculators;
