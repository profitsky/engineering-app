import React from 'react';

import {
  CalMenuToolTipMainContainer,
  CalMenuToolTipContent,
  CalMenuToolTipSvg,
  BlurFilter,
} from './CalcMenuToolTip.style';

const CalcMenuToolTip = ({ content, hover }) => {
  return (
    <CalMenuToolTipMainContainer
      animate={{ opacity: hover ? 0.7 : 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
    >
      <BlurFilter>
        <CalMenuToolTipSvg
          width='400'
          height='400'
          viewBox='0 0 400 400'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='400' height='400' />
          <path
            className='frame'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M75.1495 180.867L74.8155 219.133L101.304 246.428L297.89 245.956L324.851 219.133L325.184 180.867L298.696 153.572L102.11 154.044L75.1495 180.867ZM77.1665 182.542L76.8618 217.458L102.844 243.911L296.307 244.433L322.828 217.889L323.133 182.973L297.278 155.998H103.425L77.1665 182.542Z'
          />
          <path
            className='main'
            d='M282.163 164.003L297.141 155.501L103.274 155.276L108.806 158.855H182.926L197.103 164.003H282.163Z'
          />
          <path
            className='main'
            d='M117.782 236.829L102.758 244.496L296.148 244.996L290.638 241.227H216.732L202.596 236.829H117.782Z'
          />
        </CalMenuToolTipSvg>
      </BlurFilter>
      {hover && <CalMenuToolTipContent>{content}</CalMenuToolTipContent>}
    </CalMenuToolTipMainContainer>
  );
};

export default CalcMenuToolTip;
