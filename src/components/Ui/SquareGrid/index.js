import React from 'react';

//STYLED COMPONENTS
import {
  SquareGridWrapper,
  Overlay,
  Dot1,
  Dot2,
  Dot3,
  Dot4,
  Dot5,
} from './SquareGrid.styles';

//IMAGES
import { ReactComponent as SGrid } from '../../../images/squareGrid.svg';

const SquareGrid = () => {
  return (
    <SquareGridWrapper>
      <Overlay />
      <SGrid style={{ opacity: '0.1' }} />
      <Dot1 />
      <Dot2 />
      <Dot3 />
      <Dot4 />
      <Dot5 />
    </SquareGridWrapper>
  );
};

export default SquareGrid;
