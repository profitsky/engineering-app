import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HexagonGridMainContainer = styled.section`
  width: 100%;
  height: 100%;
  top: 13vh;
  left: 30vw;
  position: absolute;
`;

export const HexagonGridSvg = styled.svg`
  width: 100%;
  height: 100%;

  stroke-width: 2px;
  stroke-linejoin: round;
  stroke-linecap: round;
  transform: scale(2.1);
`;

// export const ActiveGroupSvg = styled.g`
//   fill: 'green';
//   cursor: pointer;
//   pointer-events: all;
//   &:hover {
//     fill: 'yellow';
//   }
// `;

export const ActiveCellSvg = styled(motion.path)`
  /* &:hover {
    fill: red;
  } */
  /* fill: brown; */
`;
