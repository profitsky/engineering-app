import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HudFrameWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HudFrameSVG = styled(motion.svg)`
  width: 95%;
  height: 95%;
  overflow: visible;
  stroke: var(--orange);
  stroke-width: 10px;
  filter: url(#fire);
  stroke-linejoin: round;
  stroke-linecap: round;

  #Vector {
    filter: none;
  }
`;
