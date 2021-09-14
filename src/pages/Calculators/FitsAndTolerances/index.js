import React from 'react';

// STYLED ELEMENTS
import {
  FitsMainContainer,
  FitsGrid,
  FitsResult,
  FitsDiagram,
  FitsInputParameters,
  HoleParameters,
  ShaftParameters,
  FitsSummary,
} from './FitsAndTolerances.styles';

//COMPONENTS
import GridHeader from '../../../components/GridHeader';
import GridInput from '../../../components/GridInput';

const FitsAndTolerances = () => {
  return (
    <FitsMainContainer>
      <FitsGrid>
        <FitsInputParameters>
          <GridHeader primary headerContent='input parameters' />
          <GridHeader headerContent='nominal size' />
          <GridInput />
          <GridHeader headerContent='mm' />
          <GridHeader headerContent='hole tolerance' />

          <GridHeader headerContent='shaft tolerance' />
        </FitsInputParameters>
        <FitsResult>
          <GridHeader headerContent='result' />
        </FitsResult>
        <FitsDiagram>
          <GridHeader headerContent='diagram' primary />
        </FitsDiagram>
        <HoleParameters>
          <GridHeader headerContent='hole' primary />
        </HoleParameters>
        <ShaftParameters>
          <GridHeader headerContent='shaft' primary />
        </ShaftParameters>
        <FitsSummary>
          <GridHeader headerContent='fit' primary='primary' />
        </FitsSummary>
      </FitsGrid>
    </FitsMainContainer>
  );
};

export default FitsAndTolerances;
