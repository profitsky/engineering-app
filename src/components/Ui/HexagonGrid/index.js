import React, { useState } from 'react';
import { motion } from 'framer-motion';

//STYLED COMPONENTS
import {
  HexagonGridMainContainer,
  HexagonGridSvg,
  ActiveCellSvg,
} from './HexagonGrid.styles';
//COMPONENTS

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const HexagonGrid = (props) => {
  const [blink, setBlink] = useState(false);

  const data = [
    {
      index: 1,
      d: 'M240 547.8L264.71 590.6H314.13L338.84 547.8L314.13 505H264.71L240 547.8Z',
      fill: 'yellow',
      cursor: 'pointer',
      onClick: () => console.log('siema'),
      whileHover: { scale: 4, transition: { duration: 0.3 } },
    },
    {
      index: 2,
      d: 'M557 272.8L581.71 315.6H631.13L655.84 272.8L631.13 230H581.71L557 272.8Z',
      fill: 'white',
      cursor: 'pointer',
      onClick: () => console.log('siema'),
      whileHover: { scale: 4, transition: { duration: 0.3 } },
    },
    {
      index: 3,
      d: 'M81 272.8L105.71 315.6H155.13L179.84 272.8L155.13 230H105.71L81 272.8Z"',
      fill: 'white',
      cursor: 'pointer',
      onClick: () => console.log('siema'),
      whileHover: blink
        ? { scale: 4, x: 150, transition: { duration: 0.3 } }
        : null,
    },
  ];

  const cellRender = data.map((props) => {
    return (
      <>
        <ActiveCellSvg key={props.index} {...props} />
        <h1>{props.index}</h1>
      </>
    );
  });

  console.log(cellRender);
  return (
    <HexagonGridMainContainer>
      <HexagonGridSvg
        initial={{ y: 250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 1 }}
        width='1291'
        height='727'
        viewBox='0 0 1291 727'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {cellRender}
      </HexagonGridSvg>
    </HexagonGridMainContainer>
  );
};

export default HexagonGrid;
