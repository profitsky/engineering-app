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
      delay={props.delay}
      stroke={props.stroke}
      initial={{ opacity: 1, fill: '#000000', scale: 1 }}
      animate={{
        opacity: 1,

        fill: [
          '#000000',
          '#304855',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#000000',
        ],
        scale: [1, 0.9, 1, 1, 1, 1, 1, 1],
      }}
      transition={{
        delay: props.delay,
        ease: 'easeInOut',
        duration: 6,
        repeat: Infinity,
      }}
    ></HexagonSvg>
  );
};

export default HexagonCell;
