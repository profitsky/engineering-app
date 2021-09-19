import styled from 'styled-components';

export const GridHeaderStyle = styled.h1`
  text-transform: uppercase;
  grid-column-start: ${(props) => props.primary && 1};
  grid-column-end: ${(props) => props.primary && 4};
  color: ${(props) => (props.primary ? 'yellow' : 'red')};
`;
