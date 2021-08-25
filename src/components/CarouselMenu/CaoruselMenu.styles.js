import styled from 'styled-components';

export const CaruselMenuWrapper = styled.section`
  background-color: yellow;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  max-height: 1000px;
  perspective: 190vh;
  overflow: hidden;
`;

export const CaruselContainer = styled.div`
  background-color: pink;
  bottom: -17%;
  left: 50%;
  position: absolute;
  width: 200%;
  aspect-ratio: auto 1/1;
  transform-origin: bottom;
  transform: translateX(-50%) rotateX(90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
`;

export const CaruselMain = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform: rotateZ(0deg);
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

export const CaruselBottomWall = styled.img`
  border: 5px solid white;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
`;

export const CaruselSideWall = styled.div`
  position: absolute;
  background-color: red;
  /* width: ${({ percentage }) => `${percentage}%`}; */
  width: 55%;
  height: 100%;
  transform: rotateX(-90deg) rotateY(${({ angle }) => `${-angle}deg`})
    translateZ(${({ distance }) => `-${distance}px`}) translateY(-50%);
  transform-style: preserve-3d;
  backface-visibility: hidden;
`;

export const WallImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 80%;
  transform-style: preserve-3d;
  transform: translateX(${({ percentage }) => `${percentage}%`});
  /* transform: 25%; */
`;
