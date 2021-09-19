import React from 'react';

import { GridHeaderStyle } from './GridHeader.styles';

const GridHeader = ({ headerContent, primary }) => {
  return <GridHeaderStyle primary={primary}>{headerContent}</GridHeaderStyle>;
};

export default GridHeader;
