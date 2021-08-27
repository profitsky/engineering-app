import styled from 'styled-components';

export const LightMainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const LighBoxShadow = styled.div`
  position: absolute;
  opacity: 1;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: rgba(255, 175, 70, 0.5);
  box-shadow: 0px 0px 150px 135px rgba(255, 175, 70, 1);
`;
