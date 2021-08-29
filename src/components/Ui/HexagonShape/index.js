import React from 'react';

//STYLED COMPONENTS
import {
  Wrapper,
  HexDummy,
  HexagonMainContainer,
  HexagonBorder,
} from './HexagonShape.styles';

const HexagonShape = (props) => {
  // const [width, height] = useHexDimensions;

  return (
    <Wrapper>
      <HexDummy></HexDummy>
      <HexagonMainContainer>
        <HexagonBorder></HexagonBorder>
      </HexagonMainContainer>
    </Wrapper>
  );
};

export default HexagonShape;
