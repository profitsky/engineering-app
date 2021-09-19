import React from 'react';

//STYLED COMPONENT
import { Grid } from './FitsHoleAndShaft.styles';

//COMPONENTS
import GridHeader from '../GridHeader';
import GridPara from '../GridPara';

const FitsHoleAndShaft = () => {
  return (
    <Grid>
      <GridHeader></GridHeader>
      <GridPara>Designation</GridPara>
      <GridPara>10 H7</GridPara>
      <GridPara>Hole Upper Deviation</GridPara>
      <GridPara>0,001mm</GridPara>
      <GridPara>Hole Lower Deviation</GridPara>
      <GridPara>0,001mm</GridPara>
      <GridPara>Maximum Hole Size</GridPara>
      <GridPara>0,001mm</GridPara>
      <GridPara>Hole Lower Deviation</GridPara>
      <GridPara>0,001mm</GridPara>
      <GridPara>Maximum Hole Size</GridPara>
      <GridPara>0,001mm</GridPara>
      <GridPara>Maximum Hole Size</GridPara>
      <GridPara>0,001mm</GridPara>
    </Grid>
  );
};

export default FitsHoleAndShaft;
