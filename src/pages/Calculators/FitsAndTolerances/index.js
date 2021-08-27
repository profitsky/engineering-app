import React from 'react';

// STYLED ELEMENTS
import { FitsMainContainer } from './FitsAndTolerances.styles';

//COMPONENTS
import Button from '../../../components/Button';
import SelectorList from '../../../components/SelectorList';

const FitsAndTolerances = () => {
  return (
    <FitsMainContainer>
      {/* <Button>Zatwierdz</Button> */}
      <SelectorList></SelectorList>
      <SelectorList></SelectorList>
      <SelectorList></SelectorList>
      <SelectorList></SelectorList>
      <SelectorList></SelectorList>
      <SelectorList></SelectorList>
      <SelectorList></SelectorList>
    </FitsMainContainer>
  );
};

export default FitsAndTolerances;
