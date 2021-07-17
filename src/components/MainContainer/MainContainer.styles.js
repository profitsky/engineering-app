import styled from 'styled-components';

export const MainWrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  z-index: -1;
`;

export const MainBackGround = styled.img`
  width: 100%;
  height: calc(100vh - 84px);
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;
