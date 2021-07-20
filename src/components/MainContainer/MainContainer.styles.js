import styled from 'styled-components';

export const MainWrapper = styled.div`
  max-width: var(--maxWidth);
  height: calc(100vh - 84px);
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const MainBackGround = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;
