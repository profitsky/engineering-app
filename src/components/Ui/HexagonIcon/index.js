import React from 'react';

import { HexagonIconContainer, HexagonIconGridSvg } from './HexagonIcon.styles';

const HexagonIcon = (props) => {
  return (
    <HexagonIconContainer>
      <HexagonIconGridSvg>{props.children}</HexagonIconGridSvg>
    </HexagonIconContainer>
  );
};

export default HexagonIcon;
