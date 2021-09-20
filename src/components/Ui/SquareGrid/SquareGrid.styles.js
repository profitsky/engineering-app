import styled, { keyframes } from 'styled-components';

export const SquareGridWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  top: 0;
  left: 0;
  min-width: 1280px;
  min-height: 768px;
`;

export const TempDiv = styled.div`
  min-width: 1280px;
  min-height: 768px;
  overflow: hidden;
`;

const dotAnimation = keyframes`
  0% {
    motion-offset: 0%;
    offset-distance: 0%;
    opacity: 0.2;

  }
  39%{
    motion-offset: 100%;
    offset-distance: 100%;
    opacity: 0.2;
  }
  40%{
    motion-offset: 100%;
    offset-distance: 100%;
    opacity: 0;
  }

  100%{
    motion-offset: 100%;
    offset-distance: 100%;
    opacity: 0;
  }
`;

const DotShape = styled.div`
  position: absolute;
  opacity: 0.1;
  top: 0;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--orange);
  box-shadow: 0px 0px 14px 7px rgba(255, 175, 70, 0.9);
  animation: ${dotAnimation} 10s infinite linear;
`;

export const Overlay = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    180deg,
    rgba(18, 15, 25, 0.2) 0%,
    rgba(37, 43, 52, 0.5) 32%,
    rgba(139, 143, 145, 0.5) 100%
  );
  z-index: 1;
`;

export const Dot1 = styled(DotShape)`
  motion-path: path(
    'M-19.47,532.84c210.05-75,431.62-119.47,655.13-119.43,222.69,0,443.94,45.61,653.05,120.59'
  );
  offset-path: path(
    'M-19.47,532.84c210.05-75,431.62-119.47,655.13-119.43,222.69,0,443.94,45.61,653.05,120.59'
  );
`;

export const Dot2 = styled(DotShape)`
  motion-path: path(
    'M-20.09,234.42c217.92,14.46,435.91,31.85,654.46,31.89s436.85-13.06,654.34-33'
  );
  offset-path: path(
    'M-20.09,234.42c217.92,14.46,435.91,31.85,654.46,31.89s436.85-13.06,654.34-33'
  );
  animation-delay: 1s;
`;

export const Dot3 = styled(DotShape)`
  motion-path: path('M-20,659.9c396.68-241.65,911.06-240,1308.68-2.06');
  offset-path: path('M-20,659.9c396.68-241.65,911.06-240,1308.68-2.06');
  animation-delay: 2s;
`;

export const Dot4 = styled(DotShape)`
  motion-path: path(
    'M-18.83-56.78c202.29,104.22,425.92,164,654,164,228,0,451-61.08,653.49-164.11'
  );
  offset-path: path(
    'M-18.83-56.78c202.29,104.22,425.92,164,654,164,228,0,451-61.08,653.49-164.11'
  );
  animation-delay: 3s;
`;

export const Dot5 = styled(DotShape)`
  motion-path: path(
    'M-19.46,68.18c212.84,60.64,432,112,654.58,112,222.08,0,441.62-50.72,653.59-112.92'
  );
  offset-path: path(
    'M-19.46,68.18c212.84,60.64,432,112,654.58,112,222.08,0,441.62-50.72,653.59-112.92'
  );
  animation-delay: 4s;
`;
export const Dot6 = styled(DotShape)`
  motion-path: path(
    'M-20.09,192.61c216.78,31.53,435.36,52,654.57,51.92,219,0,437.68-21.78,654.24-53'
  );
  offset-path: path(
    'M-20.09,192.61c216.78,31.53,435.36,52,654.57,51.92,219,0,437.68-21.78,654.24-53'
  );
  animation-delay: 5s;
`;
export const Dot7 = styled(DotShape)`
  motion-path: path(
    'M-19,408.16c216.85-27.77,434.66-53.91,653.61-53.93s438,21.84,654.08,56'
  );
  offset-path: path(
    'M-19,408.16c216.85-27.77,434.66-53.91,653.61-53.93s438,21.84,654.08,56'
  );
  animation-delay: 6s;
`;
export const Dot8 = styled(DotShape)`
  motion-path: path(
    'M-19.28,491.35c213.6-56.22,433-97.62,654.57-97.57,221.1.05,440.43,42.74,653.43,99.07'
  );
  offset-path: path(
    'M-19.28,491.35c213.6-56.22,433-97.62,654.57-97.57,221.1.05,440.43,42.74,653.43,99.07'
  );
  animation-delay: 7s;
`;
