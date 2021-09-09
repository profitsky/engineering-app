import styled from 'styled-components';

export const LightMainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LighBoxShadow = styled.div`
  position: absolute;
  opacity: 1;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background-color: rgba(255, 175, 70, 0.5);
  box-shadow: 0px 0px 150px 135px rgba(255, 175, 70, 1);
`;
