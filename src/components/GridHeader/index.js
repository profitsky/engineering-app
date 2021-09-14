import React from 'react';

import { GridHeaderStyle } from './GridHeader.styles';

const GridHeader = ({ headerContent }) => {
  return <GridHeaderStyle>{headerContent}</GridHeaderStyle>;
};

export default GridHeader;
