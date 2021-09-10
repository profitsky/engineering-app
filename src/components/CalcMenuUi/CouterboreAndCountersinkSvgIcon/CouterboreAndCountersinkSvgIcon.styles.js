import styled from 'styled-components';

export const SvgIconContainer = styled.section`
  width: 100%;
  height: 100%;
  top: -15vh;
  left: 14vw;
  position: absolute;
  transform: scale(1.5);
`;

export const SvgIcon = styled.svg`
  transform: scale(1.5);
  position: fixed;
  top: 1px;
  left: 294px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;

  .cbore {
    cursor: pointer;
    z-index: 2;
    pointer-events: auto;
  }

  .circle {
    fill: yellow;
  }

  .cell {
    fill: gray;
  }

  .icon {
    fill: blue;
  }

  .frame {
    fill: red;
  }
`;
