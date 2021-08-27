import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainWrapper = styled.div`
  max-width: var(--maxWidth);
  min-height: var(--minHeight);
  height: calc(100vh - 84px);
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;

export const MainBackGround = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const MainOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: ${({ darkOverlay }) => (darkOverlay ? '1' : '0')};
`;
