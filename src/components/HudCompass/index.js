import { motion } from 'framer-motion';
import React from 'react';

//STYLES
import {
  HudCompassWrapper,
  HudCompassSVG,
  HudCompassScene,
} from './HudCompass.styles';

const HudCompass = () => {
  return (
    <HudCompassWrapper>
      <HudCompassScene>
        <HudCompassSVG
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1484 1484'
        >
          <motion.circle
            id='first-item'
            cx='742'
            cy='742'
            r='141.51'
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 1, repeat: Infinity }}
          />

          <motion.path
            animate={{ rotate: -360 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
            id='second-item'
            d='M962.81 742h-31.45c0-104.42-84.94-189.37-189.36-189.37v-31.44c121.75 0 220.81 99.05 220.81 220.81ZM521.19 742h31.44c0 104.42 85 189.37 189.37 189.37v31.44c-121.76 0-220.81-99.06-220.81-220.81Z'
          />
          <motion.path
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            id='third-item'
            d='M742 466.62a277.77 277.77 0 0 0-37 2.49l-4.21 25.59a252.77 252.77 0 0 1 73.68-1.32l11.27-23.3a277.17 277.17 0 0 0-43.74-3.46ZM647.81 483.23a276.54 276.54 0 0 0-34 15l4.8 25.49a252.44 252.44 0 0 1 68.79-26.44l2.61-25.75a276.42 276.42 0 0 0-42.2 11.7ZM565 531.05a275.59 275.59 0 0 0-26.78 25.72l13.22 22.31A252.13 252.13 0 0 1 607 530.71l-6.35-25.09A277.08 277.08 0 0 0 565 531.05ZM503.51 604.31a278.41 278.41 0 0 0-16.37 33.33l20.06 16.44a253.15 253.15 0 0 1 35.7-64.47l-14.55-21.4a276.64 276.64 0 0 0-24.84 36.1ZM470.8 694.18a276.85 276.85 0 0 0-4 36.92l24.47 8.59a252.89 252.89 0 0 1 11.5-72.79l-21-15.14a276.6 276.6 0 0 0-10.97 42.42ZM470.8 789.82a277.21 277.21 0 0 0 8.88 36.06l25.94-.3a252.92 252.92 0 0 1-14.09-72.34l-24.91-7a276.73 276.73 0 0 0 4.18 43.58ZM503.51 879.7a277.71 277.71 0 0 0 20.68 30.84l24.27-9.16a252 252 0 0 1-38-63.15l-25.82 1.9a276.81 276.81 0 0 0 18.87 39.57ZM565 953a276.8 276.8 0 0 0 30 21.91L614.64 958a252.74 252.74 0 0 1-57.29-46.36l-23.61 10.61A277 277 0 0 0 565 953ZM647.81 1000.78a276.84 276.84 0 0 0 35.67 10.33l12.71-22.61a252.91 252.91 0 0 1-69.69-24l-18.56 18a276.93 276.93 0 0 0 39.87 18.28ZM742 1017.39a277.77 277.77 0 0 0 37-2.49l4.21-25.6a251.72 251.72 0 0 1-41.26 3.41 254.88 254.88 0 0 1-32.42-2.09l-11.27 23.3a277.17 277.17 0 0 0 43.74 3.47ZM836.19 1000.78a278.07 278.07 0 0 0 34-15l-4.8-25.49a252.44 252.44 0 0 1-68.79 26.44l-2.6 25.74a277.25 277.25 0 0 0 42.19-11.69ZM919 953a276.78 276.78 0 0 0 26.78-25.72l-13.22-22.32A252.58 252.58 0 0 1 877 953.3l6.35 25.09A276.39 276.39 0 0 0 919 953ZM980.49 879.69a278.41 278.41 0 0 0 16.37-33.33l-20.06-16.44a252.68 252.68 0 0 1-35.7 64.47l14.55 21.41a276.75 276.75 0 0 0 24.84-36.11ZM1013.2 789.82a276.5 276.5 0 0 0 4-36.92l-24.47-8.59a252.72 252.72 0 0 1-11.5 72.79l21 15.15a277.56 277.56 0 0 0 10.97-42.43ZM1013.2 694.18a277.46 277.46 0 0 0-8.88-36l-25.94.3a251.86 251.86 0 0 1 14.09 72.33l24.91 7a276.86 276.86 0 0 0-4.18-43.63ZM980.49 604.31a277.71 277.71 0 0 0-20.68-30.84l-24.27 9.15a252 252 0 0 1 38 63.15l25.82-1.89a277.89 277.89 0 0 0-18.87-39.57ZM919 531.05a276.8 276.8 0 0 0-30-21.91L869.35 526a252.89 252.89 0 0 1 57.3 46.35l23.61-10.61A276.94 276.94 0 0 0 919 531.05ZM836.18 483.23a276.76 276.76 0 0 0-35.66-10.34l-12.71 22.62a252 252 0 0 1 69.69 24l18.56-18.05a276.52 276.52 0 0 0-39.88-18.23Z'
          />
          <circle id='fourth-item' cx='750' cy='750' r='307.64' />

          <motion.path
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
            id='fifth-item'
            d='M742 347.69c217.76 0 394.3 176.54 394.3 394.31M742 1136.3c-217.76 0-394.3-176.53-394.3-394.3'
          />

          <motion.circle
            animate={{ rotate: -360 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
            id='sixth-item'
            cx='750'
            cy='750'
            r='455.64'
            transform='rotate(-45 736.343 755.657)'
          />
          <circle id='seventh-item' cx='742' cy='742' r='503' />

          <motion.circle
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 5, repeat: Infinity }}
            id='eight-item'
            cx='742'
            cy='742'
            r='567'
          />
          <circle id='ninth-item' cx='742' cy='742' r='595' />
          <motion.circle
            animate={{ rotate: -360 }}
            transition={{ ease: 'linear', duration: 2, repeat: Infinity }}
            id='tenth-item'
            cx='742'
            cy='742'
            r='675'
          />
        </HudCompassSVG>
      </HudCompassScene>
    </HudCompassWrapper>
  );
};

export default HudCompass;
