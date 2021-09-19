import React from 'react';

//STYLED COMPONENTS
import { InputParameterGrid } from './FitsInputParameters.styles';

//COMPONENTS
import GridHeader from '../GridHeader';
import GridLabel from '../GridLabel';
import GridInput from '../GridInput';
import GridSelect from '../GridSelect';
import GridPara from '../GridPara';
import Button from '../Button';

const FitsInputParameters = (props) => {
  return (
    <InputParameterGrid>
      <GridHeader headerContent='input parameters' primary />
      <GridLabel htmlFor='nominalSize'>nominal size</GridLabel>
      <GridInput id='nominalSize' type='number' />
      <GridPara>mm</GridPara>
      <GridPara>tole tolerance</GridPara>
      <GridSelect />
      <GridSelect />
      <GridPara>shaft tolerance</GridPara>
      <GridSelect />
      <GridSelect />
      <Button></Button>
    </InputParameterGrid>
  );
};

export default FitsInputParameters;
