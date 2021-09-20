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
  Dot6,
  Dot7,
  Dot8,
  TempDiv,
} from './SquareGrid.styles';

//IMAGES
import { ReactComponent as SGrid } from '../../../images/squareGrid.svg';

const SquareGrid = () => {
  return (
    <SquareGridWrapper>
      <TempDiv>
        <Overlay />
        <SGrid style={{ opacity: '0.1', width: '100%', height: '100%' }} />
        <Dot1 />
        <Dot2 />
        <Dot3 />
        <Dot4 />
        <Dot5 />
        <Dot6 />
        <Dot7 />
        <Dot8 />
      </TempDiv>
    </SquareGridWrapper>
  );
};

export default SquareGrid;
