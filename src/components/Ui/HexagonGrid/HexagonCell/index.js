import React from 'react';

//STYLED COMPONENT
import { HexagonSvg } from './HexagonCell.styles';

const HexagonCell = (props) => {
  console.log('ZAMONTOWANY GRID CELL');
  return (
    <HexagonSvg
      key={props.id}
      fill={props.fill}
      d={props.d}
      stroke={props.stroke}
    ></HexagonSvg>
  );
};

export default React.memo(HexagonCell);
