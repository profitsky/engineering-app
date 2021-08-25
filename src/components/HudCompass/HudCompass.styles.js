import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HudCompassWrapper = styled.section`
  width: 120%;
  height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HudCompassSVG = styled(motion.svg)`
  width: 95%;
  height: 95%;
  overflow: visible;
  stroke: var(--orange);
  stroke-width: 5px;
  filter: url(#fire);
  stroke-linejoin: round;
  stroke-linecap: round;
  #
`;
