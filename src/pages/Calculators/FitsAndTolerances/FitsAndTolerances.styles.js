import styled from 'styled-components';

export const FitsMainContainer = styled.section`
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
  grid-template-rows: repeat(4, 1fr);
`;

export const bottomRightCell = styled.div`
  grid-row: 3 / span 2;
  grid-column: 2/3;
`;

export const topRightCell = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2/3;
`;
