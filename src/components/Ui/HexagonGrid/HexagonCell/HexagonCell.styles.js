import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HexagonSvg = styled(motion.path)`
  /* fill: var(--hexagonGridCellBackground); */
  stroke: var(--hexagonGridCellStroke);
  stroke-width: 1px;
  stroke-linejoin: round;
  stroke-linecap: round;
`;
