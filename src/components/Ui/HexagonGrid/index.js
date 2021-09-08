import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//STYLED COMPONENTS
import { HexagonGridMainContainer, HexagonGridSvg } from './HexagonGrid.styles';

//IMAGES
import { svgHexLayout } from '../../../images/calcMenuLayout';

//COMPONENTS
import HexagonCell from './HexagonCell';
import ChevronCell from './ChevronCell';

//HELPERS
import svgConverter from '../../../helpers/svgConverter';

//EXTERNAL DATA
const translatedSvgFile = svgConverter(svgHexLayout);
const hexCellArray = translatedSvgFile.filter((element, index) => index < 151);
const hexChevronArray = translatedSvgFile.filter(
  (element, index) => index >= 151 && index < 300
);

let shuffleNumberArray = [];
const shuffleSet = new Set();

function huffleCards() {
  do {
    shuffleSet.add(Math.floor(Math.random() * (hexCellArray.length + 1)));
  } while (shuffleSet.size <= hexCellArray.length);
  shuffleNumberArray = [...shuffleSet];
}

const HexagonGrid = () => {
  huffleCards();

  //CELL GRID RENDER
  const gridCellRender = hexCellArray.map((data) => {
    return (
      <HexagonCell
        key={data.id}
        d={data.d}
        fill={data.fill}
        stroke={data.stroke}
        delay={shuffleNumberArray[data.id] * 2}
      />
    );
  });

  //CHEVRON RENDER
  const chevronCellRender = hexChevronArray.map((data) => {
    return <ChevronCell key={data.id} d={data.d} stroke={data.stroke} />;
  });

  return (
    <HexagonGridMainContainer>
      <HexagonGridSvg>
        {gridCellRender}
        {chevronCellRender}
      </HexagonGridSvg>
    </HexagonGridMainContainer>
  );
};

export default React.memo(HexagonGrid);
