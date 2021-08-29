import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HudFrameWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
  max-height: var(--minHeight);
  transform-origin: left;
  transform: perspective(100px) rotateY(20deg);
`;

export const HudFrameSVG = styled.svg`
  transform-style: preserve-3d;
  width: 120%;
  height: 120%;
  position: absolute;
  stroke: var(--orange);
  stroke-width: 1px;
  filter: url(#fire);
  stroke-linejoin: round;
  stroke-linecap: round;

  #Vector {
    filter: none;
  }
`;
