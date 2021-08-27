import styled from 'styled-components';

export const HexDummy = styled.div`
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: rgba(255, 175, 70, 0.5);
  box-shadow: 0px 0px 80px 35px rgba(255, 175, 70, 1);
`;

export const Wrapper = styled.div`
  position: relative;
  opacity: 0.2;
  border: 1px solid yellow;

  :hover {
    opacity: 1;
  }

  &:hover ${HexDummy} {
    opacity: 1;
  }
`;

export const HexagonMainContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  position: relative;

  clip-path: polygon(
    25% 6.7%,
    75% 6.7%,
    100% 50%,
    75% 93.3%,
    25% 93.3%,
    0% 50%
  );
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`;

export const HexagonBorder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--orange);

  width: 100%;
  height: 100%;
  clip-path: polygon(
    25% 6.7%,
    75% 6.7%,
    100% 50%,
    75% 93.3%,
    25% 93.3%,
    0% 50%,
    5.77% 50%,
    27.89% 88.3%,
    72.11% 88.3%,
    94.23% 50%,
    72.11% 11.7%,
    27.89% 11.7%,
    5.77% 50%,
    0% 50%
  );
`;

export const HexagonContent = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
`;
