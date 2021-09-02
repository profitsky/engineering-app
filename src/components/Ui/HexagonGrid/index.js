import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

//STYLED COMPONENTS
import { HexagonGridMainContainer, HexagonGridSvg } from './HexagonGrid.styles';

//IMAGES
import calcMenuLayout from '../../../images/calcMenuLayout.svg';

//COMPONENTS
import HexagonCell from './HexagonCell';

//HELPERS
import svgConverter from '../../../helpers/svgConverter';

const HexagonGrid = () => {
  const [blink, setBlink] = useState();
  const [svgHexCells, setsvgHexCells] = useState([
    {
      id: 0,
      d: '',
      fill: '',
      stroke: '',
    },
  ]);
  const [loading, setLoading] = useState(true);

  console.log(loading);

  const getLayout = async () => {
    try {
      const res = await svgConverter(calcMenuLayout);

      setTimeout(() => {
        setsvgHexCells(res);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(
        `There is something wrong with a file, current error status ${error}`
      );
    }
  };

  useEffect(() => {
    getLayout();

    const usedNumberArray = [];
    let randomNumber = null;

    // const idIntevral = setInterval(() => {
    //   do {
    //     randomNumber = Math.floor(Math.random() * data.length);
    //   } while (usedNumberArray.includes(randomNumber));
    //   usedNumberArray.push(randomNumber);
    //   if (usedNumberArray.length === data.length) {
    //     usedNumberArray.length = 0;
    //     usedNumberArray[0] = randomNumber;
    //   }
    //   setBlink(randomNumber);
    // }, 1000);

    // return () => clearInterval(idIntevral);
  }, []);

  const gridCellRender = svgHexCells.map((data) => {
    // const istemIsBlink = blink === data.index;

    return (
      <HexagonCell
        // fill={istemIsBlink ? 'white' : 'red'}
        key={data.id}
        d={data.d}
        fill={data.fill}
        stroke={data.stroke}
      />
    );
  });

  console.log(gridCellRender);

  return loading ? (
    <div>
      <h1>Sie laduje</h1>
    </div>
  ) : (
    <HexagonGridMainContainer>
      <HexagonGridSvg>{gridCellRender}</HexagonGridSvg>
    </HexagonGridMainContainer>
  );
};

export default HexagonGrid;
