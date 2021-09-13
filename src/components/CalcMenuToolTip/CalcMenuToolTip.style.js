import styled from 'styled-components';

export const CalMenuToolTipMainContainer = styled.div`
  opacity: 0.7;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
`;

export const CalMenuToolTipContent = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CalMenuToolTipSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: transparent;
  .main {
    fill: white;
    filter: url(#fire);
  }

  .frame {
    stroke: white;
    filter: url(#fire);
  }
`;
