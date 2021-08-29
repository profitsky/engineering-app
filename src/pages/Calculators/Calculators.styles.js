import styled from 'styled-components';

export const CalcWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const CalcSceneWrapper = styled.div`
  top: 0;
  left: 0;
  perspective: 100px;
  width: 100%;
  height: 100%;
`;

export const CalcScene = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transform: rotateY(2deg) translateY(-15%);
  filter: blur(0.5px);
`;

export const CalcOverlay = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 15, 25, 0.5);
  background: linear-gradient(
    140deg,
    rgba(18, 15, 25, 0.5) 0%,
    rgba(37, 43, 52, 0.5) 32%,
    rgba(139, 143, 145, 0.5) 100%
  );
  z-index: 1;
`;
