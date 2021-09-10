import React from 'react';

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

//GRID ARRANGEMENT
const hexCellArray = translatedSvgFile.filter((element, index) => index < 147);
const hexChevronArray = translatedSvgFile.filter(
  (element, index) => index >= 147
);

let shuffleNumberArray = [];
const shuffleSet = new Set();

//SHUFFLE FUNCTION
function huffleCards() {
  do {
    shuffleSet.add(Math.floor(Math.random() * hexCellArray.length));
  } while (shuffleSet.size <= hexCellArray.length - 1);
  shuffleNumberArray = [...shuffleSet];
}

const HexagonGrid = (props) => {
  huffleCards();

  //CELL GRID RENDER
  const gridCellRender = hexCellArray.map((data) => {
    return (
      <HexagonCell
        key={data.id}
        id={data.id}
        d={data.d}
        fill={data.fill}
        stroke={data.stroke}
        initial={{ opacity: 1, fill: '#000000' }}
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
          ease: 'easeInOut',
          duration: 8,
          delay: `${shuffleNumberArray[data.id] * 2}`,
          repeat: Infinity,
          repeatDelay: 25,
        }}
      />
    );
  });

  //CHEVRON RENDER
  const chevronCellRender = hexChevronArray.map((data) => {
    return <ChevronCell key={data.id} d={data.d} stroke={data.stroke} />;
  });

  return (
    // <HexagonGridMainContainer>
    <HexagonGridSvg>
      {gridCellRender}
      {chevronCellRender}
    </HexagonGridSvg>
    // </HexagonGridMainContainer>
  );
};

export default React.memo(HexagonGrid);
