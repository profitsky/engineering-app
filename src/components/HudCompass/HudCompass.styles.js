import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HudCompassWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HudCompassScene = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  transform: rotateX(60deg);
`;

export const HudCompassSVG = styled(motion.svg)`
  transform: scale(0.5);
  stroke: white;
  stroke-width: 1px;
  filter: url(#fire);
  stroke-linejoin: round;
  stroke-linecap: round;

  & #first-item {
    stroke: yellow;
    stroke-width: 29px;
    fill: none;
    stroke-dasharray: 148.19219970703125, 148.19219970703125;
  }

  & #second-item {
    fill: yellow;
  }

  & #third-item {
    fill: yellow;
  }

  & #fourth-item {
    fill: none;
    stroke: yellow;
  }

  & #fifth-item {
    fill: none;
    stroke: yellow;
    stroke-width: 23px;
    stroke-miterlimit: 10px;
  }

  & #sixth-item {
    fill: none;
    stroke: yellow;
    stroke-width: 9px;
    stroke-miterlimit: 10px;
    stroke-linecap: round;
    stroke-dasharray: 0.9996359944343567, 14.994500160217285;
  }

  & #seventh-item {
    fill: none;
    stroke: yellow;
    stroke-width: 42px;
    stroke-miterlimit: 10px;
    stroke-linecap: round;
    stroke-dasharray: 0.9996359944343567, 14.994500160217285;
  }

  & #eight-item {
    fill: none;
    stroke: yellow;
    stroke-width: 7px;
    stroke-miterlimit: 10px;
    stroke-linecap: round;
    stroke-dasharray: 0, 89.07450103759766;
  }

  & #ninth-item {
    fill: none;
    stroke: yellow;
    stroke-width: 15px;
    stroke-miterlimit: 10px;
    stroke-linecap: round;
  }

  & #tenth-item {
    fill: none;
    stroke: yellow;
    stroke-width: 5px;
    stroke-miterlimit: 10px;
    stroke-linecap: round;
    stroke-dasharray: 500.8580017089844, 29.34709930419922;
  }
`;
