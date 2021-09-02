//STYLED COMPONENT
import { useState } from 'react';
import { HexagonSvg } from './HexagonCell.styles';

const HexagonCell = (props) => {
  return (
    <HexagonSvg
      fill={props.fill}
      d={props.d}
      stroke={props.stroke}
    ></HexagonSvg>
  );
};

export default HexagonCell;
