import React from 'react';

//STYLED COMPONENTS
import { Label } from './GridLabel.styles';

const GridLabel = ({ children, htmlFor }) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default GridLabel;
