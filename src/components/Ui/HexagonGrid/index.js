import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
const hexCellArray = translatedSvgFile.filter((element, index) => index < 120);
const hexChevronArray = translatedSvgFile.filter(
  (element, index) => index >= 120 && index < 240
);

// FUNCTIONS
let randomNumber = null;
const usedNumberArray = [];

function test() {
  const idI = setInterval(() => {
    console.log('siema');
  }, 1000);

  return idI;
}

const switchIsBlink = (array) => {
  setInterval(() => {
    do {
      randomNumber = Math.floor(Math.random() * array.length);
    } while (usedNumberArray.includes(randomNumber));
    usedNumberArray.push(randomNumber);
    if (usedNumberArray.length === array.length) {
      usedNumberArray.length = 0;
      usedNumberArray[0] = randomNumber;
    }

    return randomNumber;
  }, 1000);
};

const HexagonGrid = () => {
  let counter = 1;

  //STATES
  console.log('ZAMONTOWANY GRID LAYOUT');
  const [blink, setBlink] = useState(false);

  const [svgHexCells, setSvgHexCells] = useState([]);
  const [svgChevron, setSvgChevron] = useState([{}]);
  const [svgIcon, setSvgIcon] = useState([{}]);
  const [loading, setLoading] = useState(true);

  //FUNCTIONS

  const assignCells = () => {
    setSvgHexCells(hexCellArray);
    setSvgChevron(hexChevronArray);
    setLoading(false);
  };

  useEffect(() => {
    assignCells();
    const interval = setInterval(() => {
      do {
        randomNumber = Math.floor(Math.random() * hexCellArray.length);
      } while (usedNumberArray.includes(randomNumber));
      usedNumberArray.push(randomNumber);
      if (usedNumberArray.length === hexCellArray.length) {
        usedNumberArray.length = 0;
        usedNumberArray[0] = randomNumber;
      }
      setBlink(randomNumber);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  //GRID RENDER
  const gridCellRender = svgHexCells.map((data) => {
    const istemIsBlink = blink === data.id;
    return (
      <HexagonCell
        key={data.id}
        d={data.d}
        fill={istemIsBlink ? 'white' : data.fill}
        stroke={data.stroke}
      />
    );
  });

  //CHEVRON RENDER
  const chevronCellRender = svgChevron.map((data) => {
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
