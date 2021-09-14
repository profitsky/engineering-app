import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

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
import CalcMenuToolTip from '../../components/CalcMenuToolTip';

//CONTEX
import OverlayContext from '../../context/overlayConext';

//HOOKS
import useMousePosition from '../../hooks/useMousePosition';

const Calculators = () => {
  const darkOverlay = useContext(OverlayContext);
  const mousePosition = useMousePosition();
  darkOverlay.onChange(true);

  const [content, setContent] = useState(' ');
  const [hover, setHover] = useState(false);

  function handleOnHover(isHovered, ref) {
    setContent(isHovered ? ref.toUpperCase() : '');
    setHover(isHovered);
  }

  return (
    <CalcWrapper>
      <CalcSceneWrapper>
        <CalcOverlay>
          <CalcMenuToolTip content={content} hover={hover}></CalcMenuToolTip>
        </CalcOverlay>

        <Light mousePosition={mousePosition} />
        <CalcScene>
          <HexagonGrid />
          <Link to='/calculators/fitsandtolerances'>
            <FitsAndTolerancesSvgIcon handleOnHover={handleOnHover} />
          </Link>
          <Link to='/calculators/counterboreandcountersink'>
            <CouterboreAndCountersinkIcon handleOnHover={handleOnHover} />
          </Link>
          <Link to='/calculators/retainingrings'>
            <RetainingRingsSvgIcon handleOnHover={handleOnHover} />
          </Link>
        </CalcScene>
      </CalcSceneWrapper>
    </CalcWrapper>
  );
};

export default Calculators;
