import styled from 'styled-components';

export const HexagonIconContainer = styled.section`
  width: 100%;
  height: 100%;
  top: -15vh;
  left: 14vw;
  position: absolute;
  transform: scale(1.5);
  z-index: 22;
`;

export const HexagonIconGridSvg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg {
    .aaa:hover {
      fill: yellow;
      cursor: pointer;
    }
  }
`;
