import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ChevronCellSvg = styled(motion.path)`
  stroke: var(--chevronGridCellStroke);
  stroke-width: 2px;
  stroke-linejoin: round;
  stroke-linecap: round;
`;
