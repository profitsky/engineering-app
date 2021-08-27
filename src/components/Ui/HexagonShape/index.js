import React from 'react';

//STYLED COMPONENTS
import {
  Wrapper,
  HexDummy,
  HexagonMainContainer,
  HexagonBorder,
  HexagonContent,
} from './HexagonShape.styles';

const HexagonShape = (props) => {
  // const [width, height] = useHexDimensions;

  return (
    <Wrapper>
      <HexDummy></HexDummy>
      <HexagonMainContainer>
        <HexagonBorder></HexagonBorder>
        <HexagonContent>S</HexagonContent>
      </HexagonMainContainer>
    </Wrapper>
  );
};

export default HexagonShape;
