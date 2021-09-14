import styled from 'styled-components';

export const FitsMainContainer = styled.section`
  border: 1px solid yellow;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* min-height: var(--maxHeight); */
`;

export const FitsGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const FitsInputParameters = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  background-color: pink;
`;
export const FitsDiagram = styled.div`
  background-color: green;
`;
export const FitsResult = styled.div`
  background-color: yellow;
`;
export const HoleParameters = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export const ShaftParameters = styled.div`
  background-color: red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
export const FitsSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  background-color: blue;
`;
