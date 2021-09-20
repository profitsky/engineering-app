import React from 'react';

// STYLED ELEMENTS
import {
  FitsMainContainer,
  FitsGrid,
  topRightCell,
  bottomRightCell,
} from './FitsAndTolerances.styles';

//COMPONENTS
import FitsInputParameters from '../../../components/FitsInputParameters';
import FitsDiagram from '../../../components/FitsDiagram';
import FitsChart from '../../../components/FitsChart';
import FitsHoleAndShaft from '../../../components/FitsHoleAndShaft';
import FitsSummary from '../../../components/FitsSummary';
import SquareGrid from '../../../components/Ui/SquareGrid';
import HudCompass from '../../../components/HudCompass';

const FitsAndTolerances = () => {
  return (
    <FitsMainContainer>
      <SquareGrid />
      <HudCompass />
      {/* <FitsGrid>
        <FitsInputParameters />
        <FitsChart as={bottomRightCell} />
        <FitsDiagram as={topRightCell} />
        <FitsHoleAndShaft />
        <FitsHoleAndShaft />
        <FitsSummary />
      </FitsGrid> */}
    </FitsMainContainer>
  );
};

export default FitsAndTolerances;
