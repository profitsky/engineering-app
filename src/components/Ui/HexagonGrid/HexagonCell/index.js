import React from 'react';

//STYLED COMPONENT
import { HexagonSvg } from './HexagonCell.styles';

//MOTION VARIANTS

const HexagonCell = (props) => {
  console.log('ZAMONTOWANY GRID CELL');
  return (
    <HexagonSvg
      id={props.id}
      fill={props.fill}
      d={props.d}
      stroke={props.stroke}
      animate={props.animate}
      transition={props.transition}
      whileHover={props.whileHover}
      style={props.style}
    ></HexagonSvg>
  );
};

export default React.memo(HexagonCell);
