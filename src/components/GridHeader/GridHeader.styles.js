import styled from 'styled-components';

export const GridHeaderStyle = styled.h1`
  text-transform: uppercase;
  grid-column-start: ${(props) => (props.primary ? 1 : 1)};
  grid-column-end: ${(primary) => (primary ? 4 : 1)};
  color: ${(props) => (props.primary ? 'yellow' : 'red')};
`;
