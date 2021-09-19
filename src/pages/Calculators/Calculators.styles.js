import styled from 'styled-components';

export const CalcWrapper = styled.section`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const CalcSceneWrapper = styled.div`
  top: 0;
  left: 0;
  perspective: 100px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CalcScene = styled.div`
  position: relative;
  height: 1006px;
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: left;
  transform: rotateY(2deg) translateY(-10%);
`;

export const CalcOverlay = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    140deg,
    rgba(18, 15, 25, 0.2) 0%,
    rgba(37, 43, 52, 0.5) 32%,
    rgba(139, 143, 145, 0.5) 100%
  );
  z-index: 1;
`;
