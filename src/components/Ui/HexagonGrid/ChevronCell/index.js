import React from 'react';

import { ChevronCellSvg } from './ChevronCell.styles';

const ChevronCell = (props) => {
  console.log('ZAMONTOWANY CHEVRON');
  return (
    <ChevronCellSvg
      key={props.id}
      fill={props.fill}
      d={props.d}
      stroke={props.stroke}
    ></ChevronCellSvg>
  );
};

export default React.memo(ChevronCell);
