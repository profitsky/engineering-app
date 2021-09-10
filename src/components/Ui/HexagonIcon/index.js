import React from 'react';

import { HexagonIconContainer, HexagonIconGridSvg } from './HexagonIcon.styles';

const HexagonIcon = (props) => {
  const { children } = props;

  return (
    <HexagonIconContainer>
      <HexagonIconGridSvg>{children}</HexagonIconGridSvg>
    </HexagonIconContainer>
  );
};

export default HexagonIcon;
