import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const CalMenuToolTipMainContainer = styled(motion.div)`
  opacity: 0;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
`;

export const BlurFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  filter: blur(2px);
`;

export const CalMenuToolTipSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: transparent;
  transform: scaleX(1.4);

  .main {
    fill: white;
    filter: url(#fire);
  }

  .frame {
    stroke: white;
    filter: url(#fire);
    letter-spacing: ;
  }
`;

const focusIn = keyframes`
  0% {
    
      filter: blur(12px);
      opacity: 0;
      letter-spacing: 5px;
      
  }
  100% {
    
      filter: blur(0px);
      opacity: 1;
      letter-spacing: 1px;
  }
}
`;

export const CalMenuToolTipContent = styled.h1`
  position: absolute;
  white-space: nowrap;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${focusIn} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;
