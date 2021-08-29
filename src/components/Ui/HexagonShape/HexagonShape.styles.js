import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  opacity: 1;
  border: 1px solid blue;
`;

export const HexDummy = styled.div`
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%) rotateX(30deg); */
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: blue;
  box-shadow: 0px 0px 80px 35px rgba(255, 175, 70, 1);
  transform: rotateZ(90deg);
`;

export const HexagonMainContainer = styled.div`
  width: 210px;
  height: 200px;
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
`;

export const HexagonBorder = styled.div`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: yellow;

  width: 100%;
  height: 100%;
  clip-path: polygon(
    25% 6.7%,
    75% 6.7%,
    100% 50%,
    75% 93.3%,
    25% 93.3%,
    0% 50%,
    1.15% 50%,
    25.58% 92.3%,
    74.42% 92.3%,
    98.85% 50%,
    74.42% 7.7%,
    25.58% 7.7%,
    1.15% 50%,
    0% 50%
  );
`;
