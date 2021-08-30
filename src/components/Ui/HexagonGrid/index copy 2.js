import React from 'react';
import { motion } from 'framer-motion';

//STYLED COMPONENTS
import {
  HexagonGridMainContainer,
  HexagonGridSvg,
  ActiveCellSvg,
} from './HexagonGrid.styles';
//COMPONENTS

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const HexagonGrid = (props) => {
  const data = {
    data: 'M1193 638.8L1217.71 681.6H1267.13L1291.84 638.8L1267.13 596H1217.71L1193 638.8Z',
  };

  return (
    <HexagonGridMainContainer>
      <HexagonGridSvg
        initial={{ y: 250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 1 }}
        width='1291'
        height='727'
        viewBox='0 0 1291 727'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* <g id='Vector'> */}
        <path
          id='Vector_2'
          d='M1138.71 727.6L1114 684.8L1138.71 642H1188.13L1212.84 684.8L1188.13 727.6H1138.71Z '
          // fill='var(--hexagonGridCellBackground)'
          fill='red'
          stroke='var(--hexagonGridCellStroke)'
        />

        <path
          id='Vector_3'
          d='M955 684.8L979.71 727.6H1029.13L1053.84 684.8L1029.13 642H979.71L955 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_4'
          d='M796 684.8L820.71 727.6H870.13L894.84 684.8L870.13 642H820.71L796 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_5'
          d='M637 684.8L661.71 727.6H711.13L735.84 684.8L711.13 642H661.71L637 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_6'
          d='M478 684.8L502.71 727.6H552.13L576.84 684.8L552.13 642H502.71L478 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_7'
          d='M319 684.8L343.71 727.6H393.13L417.84 684.8L393.13 642H343.71L319 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_8'
          d='M160 684.8L184.71 727.6H234.13L258.84 684.8L234.13 642H184.71L160 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_9'
          d='M1 684.8L25.71 727.6H75.13L99.84 684.8L75.13 642H25.71L1 684.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <ActiveCellSvg
          id='Vector_10'
          // d='M1193 638.8L1217.71 681.6H1267.13L1291.84 638.8L1267.13 596H1217.71L1193 638.8Z'
          d={data}
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_11'
          d='M1035 638.8L1059.71 681.6H1109.13L1133.84 638.8L1109.13 596H1059.71L1035 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_12'
          d='M876 638.8L900.71 681.6H950.13L974.84 638.8L950.13 596H900.71L876 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_13'
          d='M717 638.8L741.71 681.6H791.13L815.84 638.8L791.13 596H741.71L717 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_14'
          d='M557 638.8L581.71 681.6H631.13L655.84 638.8L631.13 596H581.71L557 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_15'
          d='M398 638.8L422.71 681.6H472.13L496.84 638.8L472.13 596H422.71L398 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_16'
          d='M240 638.8L264.71 681.6H314.13L338.84 638.8L314.13 596H264.71L240 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_17'
          d='M81 638.8L105.71 681.6H155.13L179.84 638.8L155.13 596H105.71L81 638.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_18'
          d='M1114 592.8L1138.71 635.6H1188.13L1212.84 592.8L1188.13 550H1138.71L1114 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_19'
          d='M955 592.8L979.71 635.6H1029.13L1053.84 592.8L1029.13 550H979.71L955 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_20'
          d='M796 592.8L820.71 635.6H870.13L894.84 592.8L870.13 550H820.71L796 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_21'
          d='M637 592.8L661.71 635.6H711.13L735.84 592.8L711.13 550H661.71L637 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_22'
          d='M478 592.8L502.71 635.6H552.13L576.84 592.8L552.13 550H502.71L478 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_23'
          d='M319 592.8L343.71 635.6H393.13L417.84 592.8L393.13 550H343.71L319 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_24'
          d='M160 592.8L184.71 635.6H234.13L258.84 592.8L234.13 550H184.71L160 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_25'
          d='M1 592.8L25.71 635.6H75.13L99.84 592.8L75.13 550H25.71L1 592.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_26'
          d='M1193 547.8L1217.71 590.6H1267.13L1291.84 547.8L1267.13 505H1217.71L1193 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_27'
          d='M1035 547.8L1059.71 590.6H1109.13L1133.84 547.8L1109.13 505H1059.71L1035 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_28'
          d='M876 547.8L900.71 590.6H950.13L974.84 547.8L950.13 505H900.71L876 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_29'
          d='M717 547.8L741.71 590.6H791.13L815.84 547.8L791.13 505H741.71L717 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_30'
          d='M557 547.8L581.71 590.6H631.13L655.84 547.8L631.13 505H581.71L557 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />

        <path
          id='Vector_31'
          d='M398 547.8L422.71 590.6H472.13L496.84 547.8L472.13 505H422.71L398 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />

        <ActiveCellSvg
          id='Vector_32'
          d='M240 547.8L264.71 590.6H314.13L338.84 547.8L314.13 505H264.71L240 547.8Z'
          // fill='yellow'
          // fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_33'
          d='M81 547.8L105.71 590.6H155.13L179.84 547.8L155.13 505H105.71L81 547.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_34'
          d='M1114 501.8L1138.71 544.6H1188.13L1212.84 501.8L1188.13 459H1138.71L1114 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_35'
          d='M955 501.8L979.71 544.6H1029.13L1053.84 501.8L1029.13 459H979.71L955 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_36'
          d='M796 501.8L820.71 544.6H870.13L894.84 501.8L870.13 459H820.71L796 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_37'
          d='M637 501.8L661.71 544.6H711.13L735.84 501.8L711.13 459H661.71L637 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_38'
          d='M478 501.8L502.71 544.6H552.13L576.84 501.8L552.13 459H502.71L478 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_39'
          d='M319 501.8L343.71 544.6H393.13L417.84 501.8L393.13 459H343.71L319 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_40'
          d='M160 501.8L184.71 544.6H234.13L258.84 501.8L234.13 459H184.71L160 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_41'
          d='M1 501.8L25.71 544.6H75.13L99.84 501.8L75.13 459H25.71L1 501.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_42'
          d='M1193 455.8L1217.71 498.6H1267.13L1291.84 455.8L1267.13 413H1217.71L1193 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_43'
          d='M1035 455.8L1059.71 498.6H1109.13L1133.84 455.8L1109.13 413H1059.71L1035 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_44'
          d='M876 455.8L900.71 498.6H950.13L974.84 455.8L950.13 413H900.71L876 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_45'
          d='M717 455.8L741.71 498.6H791.13L815.84 455.8L791.13 413H741.71L717 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_46'
          d='M557 455.8L581.71 498.6H631.13L655.84 455.8L631.13 413H581.71L557 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_47'
          d='M398 455.8L422.71 498.6H472.13L496.84 455.8L472.13 413H422.71L398 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_48'
          d='M240 455.8L264.71 498.6H314.13L338.84 455.8L314.13 413H264.71L240 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_49'
          d='M81 455.8L105.71 498.6H155.13L179.84 455.8L155.13 413H105.71L81 455.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_50'
          d='M1114 409.8L1138.71 452.6H1188.13L1212.84 409.8L1188.13 367H1138.71L1114 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_51'
          d='M955 409.8L979.71 452.6H1029.13L1053.84 409.8L1029.13 367H979.71L955 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_52'
          d='M796 409.8L820.71 452.6H870.13L894.84 409.8L870.13 367H820.71L796 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_53'
          d='M637 409.8L661.71 452.6H711.13L735.84 409.8L711.13 367H661.71L637 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_54'
          d='M478 409.8L502.71 452.6H552.13L576.84 409.8L552.13 367H502.71L478 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_55'
          d='M319 409.8L343.71 452.6H393.13L417.84 409.8L393.13 367H343.71L319 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_56'
          d='M160 409.8L184.71 452.6H234.13L258.84 409.8L234.13 367H184.71L160 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_57'
          d='M1 409.8L25.71 452.6H75.13L99.84 409.8L75.13 367H25.71L1 409.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_58'
          d='M1193 364.8L1217.71 407.6H1267.13L1291.84 364.8L1267.13 322H1217.71L1193 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_59'
          d='M1035 364.8L1059.71 407.6H1109.13L1133.84 364.8L1109.13 322H1059.71L1035 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_60'
          d='M876 364.8L900.71 407.6H950.13L974.84 364.8L950.13 322H900.71L876 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_61'
          d='M717 364.8L741.71 407.6H791.13L815.84 364.8L791.13 322H741.71L717 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_62'
          d='M557 364.8L581.71 407.6H631.13L655.84 364.8L631.13 322H581.71L557 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_63'
          d='M398 364.8L422.71 407.6H472.13L496.84 364.8L472.13 322H422.71L398 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_64'
          d='M240 364.8L264.71 407.6H314.13L338.84 364.8L314.13 322H264.71L240 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_65'
          d='M81 364.8L105.71 407.6H155.13L179.84 364.8L155.13 322H105.71L81 364.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_66'
          d='M1114 318.8L1138.71 361.6H1188.13L1212.84 318.8L1188.13 276H1138.71L1114 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_67'
          d='M955 318.8L979.71 361.6H1029.13L1053.84 318.8L1029.13 276H979.71L955 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_68'
          d='M796 318.8L820.71 361.6H870.13L894.84 318.8L870.13 276H820.71L796 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_69'
          d='M637 318.8L661.71 361.6H711.13L735.84 318.8L711.13 276H661.71L637 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_70'
          d='M478 318.8L502.71 361.6H552.13L576.84 318.8L552.13 276H502.71L478 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_71'
          d='M319 318.8L343.71 361.6H393.13L417.84 318.8L393.13 276H343.71L319 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_72'
          d='M160 318.8L184.71 361.6H234.13L258.84 318.8L234.13 276H184.71L160 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_73'
          d='M1 318.8L25.71 361.6H75.13L99.84 318.8L75.13 276H25.71L1 318.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_74'
          d='M1193 272.8L1217.71 315.6H1267.13L1291.84 272.8L1267.13 230H1217.71L1193 272.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_75'
          d='M1035 272.8L1059.71 315.6H1109.13L1133.84 272.8L1109.13 230H1059.71L1035 272.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_76'
          d='M876 272.8L900.71 315.6H950.13L974.84 272.8L950.13 230H900.71L876 272.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_77'
          d='M717 272.8L741.71 315.6H791.13L815.84 272.8L791.13 230H741.71L717 272.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_78'
          d='M557 272.8L581.71 315.6H631.13L655.84 272.8L631.13 230H581.71L557 272.8Z'
          fill='yellow'
          // fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_79'
          d='M398 272.8L422.71 315.6H472.13L496.84 272.8L472.13 230H422.71L398 272.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_80'
          d='M240 272.8L264.71 315.6H314.13L338.84 272.8L314.13 230H264.71L240 272.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_81'
          d='M81 272.8L105.71 315.6H155.13L179.84 272.8L155.13 230H105.71L81 272.8Z'
          fill='yellow'
          // fill='var(--hexagonGridCellBackground)'

          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_82'
          d='M1114 226.8L1138.71 269.6H1188.13L1212.84 226.8L1188.13 184H1138.71L1114 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_83'
          d='M955 226.8L979.71 269.6H1029.13L1053.84 226.8L1029.13 184H979.71L955 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_84'
          d='M796 226.8L820.71 269.6H870.13L894.84 226.8L870.13 184H820.71L796 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_85'
          d='M637 226.8L661.71 269.6H711.13L735.84 226.8L711.13 184H661.71L637 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_86'
          d='M478 226.8L502.71 269.6H552.13L576.84 226.8L552.13 184H502.71L478 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_87'
          d='M319 226.8L343.71 269.6H393.13L417.84 226.8L393.13 184H343.71L319 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_88'
          d='M160 226.8L184.71 269.6H234.13L258.84 226.8L234.13 184H184.71L160 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_89'
          d='M1 226.8L25.71 269.6H75.13L99.84 226.8L75.13 184H25.71L1 226.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_90'
          d='M1193 181.8L1217.71 224.6H1267.13L1291.84 181.8L1267.13 139H1217.71L1193 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_91'
          d='M1035 181.8L1059.71 224.6H1109.13L1133.84 181.8L1109.13 139H1059.71L1035 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_92'
          d='M876 181.8L900.71 224.6H950.13L974.84 181.8L950.13 139H900.71L876 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_93'
          d='M717 181.8L741.71 224.6H791.13L815.84 181.8L791.13 139H741.71L717 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_94'
          d='M557 181.8L581.71 224.6H631.13L655.84 181.8L631.13 139H581.71L557 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_95'
          d='M398 181.8L422.71 224.6H472.13L496.84 181.8L472.13 139H422.71L398 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_96'
          d='M240 181.8L264.71 224.6H314.13L338.84 181.8L314.13 139H264.71L240 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_97'
          d='M81 181.8L105.71 224.6H155.13L179.84 181.8L155.13 139H105.71L81 181.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_98'
          d='M1114 135.8L1138.71 178.6H1188.13L1212.84 135.8L1188.13 93H1138.71L1114 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_99'
          d='M955 135.8L979.71 178.6H1029.13L1053.84 135.8L1029.13 93H979.71L955 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_100'
          d='M796 135.8L820.71 178.6H870.13L894.84 135.8L870.13 93H820.71L796 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_101'
          d='M637 135.8L661.71 178.6H711.13L735.84 135.8L711.13 93H661.71L637 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_102'
          d='M478 135.8L502.71 178.6H552.13L576.84 135.8L552.13 93H502.71L478 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_103'
          d='M319 135.8L343.71 178.6H393.13L417.84 135.8L393.13 93H343.71L319 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_104'
          d='M160 135.8L184.71 178.6H234.13L258.84 135.8L234.13 93H184.71L160 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_105'
          d='M1 135.8L25.71 178.6H75.13L99.84 135.8L75.13 93H25.71L1 135.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_106'
          d='M1193 89.8L1217.71 132.6H1267.13L1291.84 89.8L1267.13 47H1217.71L1193 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_107'
          d='M1035 89.8L1059.71 132.6H1109.13L1133.84 89.8L1109.13 47H1059.71L1035 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_108'
          d='M876 89.8L900.71 132.6H950.13L974.84 89.8L950.13 47H900.71L876 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_109'
          d='M717 89.8L741.71 132.6H791.13L815.84 89.8L791.13 47H741.71L717 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_110'
          d='M557 89.8L581.71 132.6H631.13L655.84 89.8L631.13 47H581.71L557 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_111'
          d='M398 89.8L422.71 132.6H472.13L496.84 89.8L472.13 47H422.71L398 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_112'
          d='M240 89.8L264.71 132.6H314.13L338.84 89.8L314.13 47H264.71L240 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_113'
          d='M81 89.8L105.71 132.6H155.13L179.84 89.8L155.13 47H105.71L81 89.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_114'
          d='M1114 43.8L1138.71 86.6H1188.13L1212.84 43.8L1188.13 1H1138.71L1114 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_115'
          d='M955 43.8L979.71 86.6H1029.13L1053.84 43.8L1029.13 1H979.71L955 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_116'
          d='M796 43.8L820.71 86.6H870.13L894.84 43.8L870.13 1H820.71L796 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_117'
          d='M637 43.8L661.71 86.6H711.13L735.84 43.8L711.13 1H661.71L637 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_118'
          d='M478 43.8L502.71 86.6H552.13L576.84 43.8L552.13 1H502.71L478 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_119'
          d='M319 43.8L343.71 86.6H393.13L417.84 43.8L393.13 1H343.71L319 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_120'
          d='M160 43.8L184.71 86.6H234.13L258.84 43.8L234.13 1H184.71L160 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_121'
          d='M1 43.8L25.71 86.6H75.13L99.84 43.8L75.13 1H25.71L1 43.8Z'
          fill='var(--hexagonGridCellBackground)'
          stroke='var(--hexagonGridCellStroke)'
        />
        <path
          id='Vector_122'
          d='M157.139 233.464L155.139 230L151.139 230M157.134 312.136L155.134 315.6L151.134 315.6M83.0029 269.336L81.0029 272.8L83.0029 276.264M177.845 269.336L179.845 272.8L177.845 276.264M103.718 233.464L105.718 230L109.718 230M103.723 312.136L105.723 315.6L109.723 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_123'
          d='M77.1359 187.464L75.1359 184L71.1359 184M77.1316 266.136L75.1316 269.6L71.1316 269.6M3 223.336L1 226.8L2.99999 230.264M97.8417 223.336L99.8417 226.8L97.8417 230.264M23.7155 187.464L25.7155 184L29.7155 184M23.7198 266.136L25.7198 269.6L29.7198 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_124'
          d='M157.159 325.464L155.159 322L151.159 322M157.155 404.136L155.155 407.6L151.155 407.6M83.0236 361.336L81.0236 364.8L83.0236 368.264M177.865 361.336L179.865 364.8L177.865 368.264M103.739 325.464L105.739 322L109.739 322M103.743 404.136L105.743 407.6L109.743 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_125'
          d='M77.1565 279.464L75.1565 276L71.1565 276M77.1523 358.136L75.1523 361.6L71.1523 361.6M3.02069 315.336L1.02069 318.8L3.02068 322.264M97.8624 315.336L99.8624 318.8L97.8624 322.264M23.7362 279.464L25.7362 276L29.7362 276M23.7405 358.136L25.7405 361.6L29.7405 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_126'
          d='M157.134 50.4641L155.134 47L151.134 47M157.13 129.136L155.13 132.6L151.13 132.6M82.9983 86.3359L80.9983 89.8L82.9983 93.2641M177.84 86.3359L179.84 89.8L177.84 93.2641M103.714 50.4641L105.714 47L109.714 47M103.718 129.136L105.718 132.6L109.718 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_127'
          d='M77.1313 4.46411L75.1313 1.00001L71.1313 1M77.127 83.1359L75.127 86.6L71.127 86.6M2.99542 40.3359L0.995422 43.8L2.99541 47.2641M97.8371 40.3359L99.8371 43.8L97.8372 47.2641M23.7109 4.46411L25.7109 1.00001L29.7109 1M23.7152 83.1359L25.7152 86.6L29.7152 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_128'
          d='M157.155 142.464L155.155 139L151.155 139M157.151 221.136L155.151 224.6L151.151 224.6M83.019 178.336L81.019 181.8L83.019 185.264M177.861 178.336L179.861 181.8L177.861 185.264M103.734 142.464L105.734 139L109.734 139M103.739 221.136L105.739 224.6L109.739 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_129'
          d='M77.152 96.4641L75.152 93L71.152 93M77.1477 175.136L75.1477 178.6L71.1477 178.6M3.01611 132.336L1.01611 135.8L3.0161 139.264M97.8578 132.336L99.8578 135.8L97.8578 139.264M23.7316 96.4641L25.7316 93L29.7316 93M23.7359 175.136L25.7359 178.6L29.7359 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_130'
          d='M157.143 599.464L155.143 596L151.143 596M157.139 678.136L155.139 681.6L151.139 681.6M83.0074 635.336L81.0074 638.8L83.0074 642.264M177.849 635.336L179.849 638.8L177.849 642.264M103.723 599.464L105.723 596L109.723 596M103.727 678.136L105.727 681.6L109.727 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_131'
          d='M77.1404 553.464L75.1404 550L71.1404 550M77.1362 632.136L75.1362 635.6L71.1362 635.6M3.00458 589.336L1.00458 592.8L3.00457 596.264M97.8463 589.336L99.8463 592.8L97.8463 596.264M23.7201 553.464L25.7201 550L29.7201 550M23.7244 632.136L25.7244 635.6L29.7244 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_132'
          d='M77.1611 645.464L75.1611 642L71.1611 642M77.1569 724.136L75.1569 727.6L71.1569 727.6M3.02527 681.336L1.02527 684.8L3.02526 688.264M97.867 681.336L99.867 684.8L97.867 688.264M23.7408 645.464L25.7408 642L29.7408 642M23.745 724.136L25.745 727.6L29.745 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_133'
          d='M157.139 416.464L155.139 413L151.139 413M157.134 495.136L155.134 498.6L151.134 498.6M83.0029 452.336L81.0029 455.8L83.0029 459.264M177.845 452.336L179.845 455.8L177.845 459.264M103.718 416.464L105.718 413L109.718 413M103.723 495.136L105.723 498.6L109.723 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_134'
          d='M77.1359 370.464L75.1359 367L71.1359 367M77.1316 449.136L75.1316 452.6L71.1316 452.6M3 406.336L1 409.8L2.99999 413.264M97.8417 406.336L99.8417 409.8L97.8417 413.264M23.7155 370.464L25.7155 367L29.7155 367M23.7198 449.136L25.7198 452.6L29.7198 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_135'
          d='M157.159 508.464L155.159 505L151.159 505M157.155 587.136L155.155 590.6L151.155 590.6M83.0236 544.336L81.0236 547.8L83.0236 551.264M177.865 544.336L179.865 547.8L177.865 551.264M103.739 508.464L105.739 505L109.739 505M103.743 587.136L105.743 590.6L109.743 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_136'
          d='M77.1565 462.464L75.1565 459L71.1565 459M77.1523 541.136L75.1523 544.6L71.1523 544.6M3.02069 498.336L1.02069 501.8L3.02068 505.264M97.8624 498.336L99.8624 501.8L97.8624 505.264M23.7362 462.464L25.7362 459L29.7362 459M23.7405 541.136L25.7405 544.6L29.7405 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_137'
          d='M316.143 233.464L314.143 230L310.143 230M316.139 312.136L314.139 315.6L310.139 315.6M242.007 269.336L240.007 272.8L242.007 276.264M336.849 269.336L338.849 272.8L336.849 276.264M262.723 233.464L264.723 230L268.723 230M262.727 312.136L264.727 315.6L268.727 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_138'
          d='M236.14 187.464L234.14 184L230.14 184M236.136 266.136L234.136 269.6L230.136 269.6M162.005 223.336L160.005 226.8L162.005 230.264M256.846 223.336L258.846 226.8L256.846 230.264M182.72 187.464L184.72 184L188.72 184M182.724 266.136L184.724 269.6L188.724 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_139'
          d='M316.164 325.464L314.164 322L310.164 322M316.16 404.136L314.16 407.6L310.16 407.6M242.028 361.336L240.028 364.8L242.028 368.264M336.87 361.336L338.87 364.8L336.87 368.264M262.744 325.464L264.744 322L268.744 322M262.748 404.136L264.748 407.6L268.748 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_140'
          d='M236.161 279.464L234.161 276L230.161 276M236.157 358.136L234.157 361.6L230.157 361.6M162.025 315.336L160.025 318.8L162.025 322.264M256.867 315.336L258.867 318.8L256.867 322.264M182.741 279.464L184.741 276L188.741 276M182.745 358.136L184.745 361.6L188.745 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_141'
          d='M316.139 50.4641L314.139 47L310.139 47M316.134 129.136L314.134 132.6L310.134 132.6M242.003 86.3359L240.003 89.8L242.003 93.2641M336.845 86.3359L338.845 89.8L336.845 93.2641M262.718 50.4641L264.718 47L268.718 47M262.723 129.136L264.723 132.6L268.723 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_142'
          d='M236.136 4.46411L234.136 1.00001L230.136 1M236.132 83.1359L234.132 86.6L230.132 86.6M162 40.3359L160 43.8L162 47.2641M256.842 40.3359L258.842 43.8L256.842 47.2641M182.716 4.46411L184.716 1.00001L188.716 1M182.72 83.1359L184.72 86.6L188.72 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_143'
          d='M316.159 142.464L314.159 139L310.159 139M316.155 221.136L314.155 224.6L310.155 224.6M242.024 178.336L240.024 181.8L242.024 185.264M336.865 178.336L338.865 181.8L336.865 185.264M262.739 142.464L264.739 139L268.739 139M262.743 221.136L264.743 224.6L268.743 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_144'
          d='M236.157 96.4641L234.157 93L230.157 93M236.152 175.136L234.152 178.6L230.152 178.6M162.021 132.336L160.021 135.8L162.021 139.264M256.862 132.336L258.862 135.8L256.862 139.264M182.736 96.4641L184.736 93L188.736 93M182.74 175.136L184.74 178.6L188.74 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_145'
          d='M316.148 599.464L314.148 596L310.148 596M316.144 678.136L314.144 681.6L310.144 681.6M242.012 635.336L240.012 638.8L242.012 642.264M336.854 635.336L338.854 638.8L336.854 642.264M262.728 599.464L264.728 596L268.728 596M262.732 678.136L264.732 681.6L268.732 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_146'
          d='M236.145 553.464L234.145 550L230.145 550M236.141 632.136L234.141 635.6L230.141 635.6M162.009 589.336L160.009 592.8L162.009 596.264M256.851 589.336L258.851 592.8L256.851 596.264M182.725 553.464L184.725 550L188.725 550M182.729 632.136L184.729 635.6L188.729 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_147'
          d='M236.166 645.464L234.166 642L230.166 642M236.161 724.136L234.161 727.6L230.161 727.6M162.03 681.336L160.03 684.8L162.03 688.264M256.872 681.336L258.872 684.8L256.872 688.264M182.745 645.464L184.745 642L188.745 642M182.75 724.136L184.75 727.6L188.75 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_148'
          d='M316.143 416.464L314.143 413L310.143 413M316.139 495.136L314.139 498.6L310.139 498.6M242.007 452.336L240.007 455.8L242.007 459.264M336.849 452.336L338.849 455.8L336.849 459.264M262.723 416.464L264.723 413L268.723 413M262.727 495.136L264.727 498.6L268.727 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_149'
          d='M236.14 370.464L234.14 367L230.14 367M236.136 449.136L234.136 452.6L230.136 452.6M162.005 406.336L160.005 409.8L162.005 413.264M256.846 406.336L258.846 409.8L256.846 413.264M182.72 370.464L184.72 367L188.72 367M182.724 449.136L184.724 452.6L188.724 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_150'
          d='M316.164 508.464L314.164 505L310.164 505M316.16 587.136L314.16 590.6L310.16 590.6M242.028 544.336L240.028 547.8L242.028 551.264M336.87 544.336L338.87 547.8L336.87 551.264M262.744 508.464L264.744 505L268.744 505M262.748 587.136L264.748 590.6L268.748 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_151'
          d='M236.161 462.464L234.161 459L230.161 459M236.157 541.136L234.157 544.6L230.157 544.6M162.025 498.336L160.025 501.8L162.025 505.264M256.867 498.336L258.867 501.8L256.867 505.264M182.741 462.464L184.741 459L188.741 459M182.745 541.136L184.745 544.6L188.745 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_152'
          d='M474.136 233.464L472.136 230L468.136 230M474.132 312.136L472.132 315.6L468.132 315.6M400 269.336L398 272.8L400 276.264M494.842 269.336L496.842 272.8L494.842 276.264M420.716 233.464L422.716 230L426.716 230M420.72 312.136L422.72 315.6L426.72 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_153'
          d='M395.14 187.464L393.14 184L389.14 184M395.136 266.136L393.136 269.6L389.136 269.6M321.005 223.336L319.005 226.8L321.005 230.264M415.846 223.336L417.846 226.8L415.846 230.264M341.72 187.464L343.72 184L347.72 184M341.724 266.136L343.724 269.6L347.724 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_154'
          d='M474.136 325.464L472.136 322L468.136 322M474.132 404.136L472.132 407.6L468.132 407.6M400 361.336L398 364.8L400 368.264M494.842 361.336L496.842 364.8L494.842 368.264M420.716 325.464L422.716 322L426.716 322M420.72 404.136L422.72 407.6L426.72 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_155'
          d='M395.161 279.464L393.161 276L389.161 276M395.157 358.136L393.157 361.6L389.157 361.6M321.025 315.336L319.025 318.8L321.025 322.264M415.867 315.336L417.867 318.8L415.867 322.264M341.741 279.464L343.741 276L347.741 276M341.745 358.136L343.745 361.6L347.745 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_156'
          d='M474.136 50.4641L472.136 47L468.136 47M474.132 129.136L472.132 132.6L468.132 132.6M400 86.3359L398 89.8L400 93.2641M494.842 86.3359L496.842 89.8L494.842 93.2641M420.716 50.4641L422.716 47L426.716 47M420.72 129.136L422.72 132.6L426.72 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_157'
          d='M395.136 4.46411L393.136 1.00001L389.136 1M395.132 83.1359L393.132 86.6L389.132 86.6M321 40.3359L319 43.8L321 47.2641M415.842 40.3359L417.842 43.8L415.842 47.2641M341.716 4.46411L343.716 1.00001L347.716 1M341.72 83.1359L343.72 86.6L347.72 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_158'
          d='M474.136 142.464L472.136 139L468.136 139M474.132 221.136L472.132 224.6L468.132 224.6M400 178.336L398 181.8L400 185.264M494.842 178.336L496.842 181.8L494.842 185.264M420.716 142.464L422.716 139L426.716 139M420.72 221.136L422.72 224.6L426.72 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_159'
          d='M395.157 96.4641L393.157 93L389.157 93M395.152 175.136L393.152 178.6L389.152 178.6M321.021 132.336L319.021 135.8L321.021 139.264M415.862 132.336L417.862 135.8L415.862 139.264M341.736 96.4641L343.736 93L347.736 93M341.74 175.136L343.74 178.6L347.74 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_160'
          d='M474.136 599.464L472.136 596L468.136 596M474.132 678.136L472.132 681.6L468.132 681.6M400 635.336L398 638.8L400 642.264M494.842 635.336L496.842 638.8L494.842 642.264M420.716 599.464L422.716 596L426.716 596M420.72 678.136L422.72 681.6L426.72 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_161'
          d='M395.145 553.464L393.145 550L389.145 550M395.141 632.136L393.141 635.6L389.141 635.6M321.009 589.336L319.009 592.8L321.009 596.264M415.851 589.336L417.851 592.8L415.851 596.264M341.725 553.464L343.725 550L347.725 550M341.729 632.136L343.729 635.6L347.729 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_162'
          d='M395.166 645.464L393.166 642L389.166 642M395.161 724.136L393.161 727.6L389.161 727.6M321.03 681.336L319.03 684.8L321.03 688.264M415.872 681.336L417.872 684.8L415.872 688.264M341.745 645.464L343.745 642L347.745 642M341.75 724.136L343.75 727.6L347.75 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_163'
          d='M474.136 416.464L472.136 413L468.136 413M474.132 495.136L472.132 498.6L468.132 498.6M400 452.336L398 455.8L400 459.264M494.842 452.336L496.842 455.8L494.842 459.264M420.716 416.464L422.716 413L426.716 413M420.72 495.136L422.72 498.6L426.72 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_164'
          d='M395.14 370.464L393.14 367L389.14 367M395.136 449.136L393.136 452.6L389.136 452.6M321.005 406.336L319.005 409.8L321.005 413.264M415.846 406.336L417.846 409.8L415.846 413.264M341.72 370.464L343.72 367L347.72 367M341.724 449.136L343.724 452.6L347.724 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_165'
          d='M474.136 508.464L472.136 505L468.136 505M474.132 587.136L472.132 590.6L468.132 590.6M400 544.336L398 547.8L400 551.264M494.842 544.336L496.842 547.8L494.842 551.264M420.716 508.464L422.716 505L426.716 505M420.72 587.136L422.72 590.6L426.72 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_166'
          d='M395.161 462.464L393.161 459L389.161 459M395.157 541.136L393.157 544.6L389.157 544.6M321.025 498.336L319.025 501.8L321.025 505.264M415.867 498.336L417.867 501.8L415.867 505.264M341.741 462.464L343.741 459L347.741 459M341.745 541.136L343.745 544.6L347.745 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_167'
          d='M633.136 233.464L631.136 230L627.136 230M633.132 312.136L631.132 315.6L627.132 315.6M559 269.336L557 272.8L559 276.264M653.842 269.336L655.842 272.8L653.842 276.264M579.716 233.464L581.716 230L585.716 230M579.72 312.136L581.72 315.6L585.72 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_168'
          d='M554.145 187.464L552.145 184L548.145 184M554.141 266.136L552.141 269.6L548.141 269.6M480.009 223.336L478.009 226.8L480.009 230.264M574.851 223.336L576.851 226.8L574.851 230.264M500.725 187.464L502.725 184L506.725 184M500.729 266.136L502.729 269.6L506.729 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_169'
          d='M633.136 325.464L631.136 322L627.136 322M633.132 404.136L631.132 407.6L627.132 407.6M559 361.336L557 364.8L559 368.264M653.842 361.336L655.842 364.8L653.842 368.264M579.716 325.464L581.716 322L585.716 322M579.72 404.136L581.72 407.6L585.72 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_170'
          d='M554.166 279.464L552.166 276L548.166 276M554.161 358.136L552.161 361.6L548.161 361.6M480.03 315.336L478.03 318.8L480.03 322.264M574.872 315.336L576.872 318.8L574.872 322.264M500.745 279.464L502.745 276L506.745 276M500.75 358.136L502.75 361.6L506.75 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_171'
          d='M633.136 50.4641L631.136 47L627.136 47M633.132 129.136L631.132 132.6L627.132 132.6M559 86.3359L557 89.8L559 93.2641M653.842 86.3359L655.842 89.8L653.842 93.2641M579.716 50.4641L581.716 47L585.716 47M579.72 129.136L581.72 132.6L585.72 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_172'
          d='M554.14 4.46411L552.14 1.00001L548.14 1M554.136 83.1359L552.136 86.6L548.136 86.6M480.005 40.3359L478.005 43.8L480.005 47.2641M574.846 40.3359L576.846 43.8L574.846 47.2641M500.72 4.46411L502.72 1.00001L506.72 1M500.724 83.1359L502.724 86.6L506.724 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_173'
          d='M633.136 142.464L631.136 139L627.136 139M633.132 221.136L631.132 224.6L627.132 224.6M559 178.336L557 181.8L559 185.264M653.842 178.336L655.842 181.8L653.842 185.264M579.716 142.464L581.716 139L585.716 139M579.72 221.136L581.72 224.6L585.72 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_174'
          d='M554.161 96.4641L552.161 93L548.161 93M554.157 175.136L552.157 178.6L548.157 178.6M480.025 132.336L478.025 135.8L480.025 139.264M574.867 132.336L576.867 135.8L574.867 139.264M500.741 96.4641L502.741 93L506.741 93M500.745 175.136L502.745 178.6L506.745 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_175'
          d='M633.136 599.464L631.136 596L627.136 596M633.132 678.136L631.132 681.6L627.132 681.6M559 635.336L557 638.8L559 642.264M653.842 635.336L655.842 638.8L653.842 642.264M579.716 599.464L581.716 596L585.716 596M579.72 678.136L581.72 681.6L585.72 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_176'
          d='M554.15 553.464L552.15 550L548.15 550M554.145 632.136L552.145 635.6L548.145 635.6M480.014 589.336L478.014 592.8L480.014 596.264M574.855 589.336L576.855 592.8L574.855 596.264M500.729 553.464L502.729 550L506.729 550M500.734 632.136L502.734 635.6L506.734 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_177'
          d='M554.17 645.464L552.17 642L548.17 642M554.166 724.136L552.166 727.6L548.166 727.6M480.034 681.336L478.034 684.8L480.034 688.264M574.876 681.336L576.876 684.8L574.876 688.264M500.75 645.464L502.75 642L506.75 642M500.754 724.136L502.754 727.6L506.754 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_178'
          d='M633.136 416.464L631.136 413L627.136 413M633.132 495.136L631.132 498.6L627.132 498.6M559 452.336L557 455.8L559 459.264M653.842 452.336L655.842 455.8L653.842 459.264M579.716 416.464L581.716 413L585.716 413M579.72 495.136L581.72 498.6L585.72 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_179'
          d='M554.145 370.464L552.145 367L548.145 367M554.141 449.136L552.141 452.6L548.141 452.6M480.009 406.336L478.009 409.8L480.009 413.264M574.851 406.336L576.851 409.8L574.851 413.264M500.725 370.464L502.725 367L506.725 367M500.729 449.136L502.729 452.6L506.729 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_180'
          d='M633.136 508.464L631.136 505L627.136 505M633.132 587.136L631.132 590.6L627.132 590.6M559 544.336L557 547.8L559 551.264M653.842 544.336L655.842 547.8L653.842 551.264M579.716 508.464L581.716 505L585.716 505M579.72 587.136L581.72 590.6L585.72 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_181'
          d='M554.166 462.464L552.166 459L548.166 459M554.161 541.136L552.161 544.6L548.161 544.6M480.03 498.336L478.03 501.8L480.03 505.264M574.872 498.336L576.872 501.8L574.872 505.264M500.745 462.464L502.745 459L506.745 459M500.75 541.136L502.75 544.6L506.75 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_182'
          d='M793.143 233.464L791.143 230L787.143 230M793.139 312.136L791.139 315.6L787.139 315.6M719.007 269.336L717.007 272.8L719.007 276.264M813.849 269.336L815.849 272.8L813.849 276.264M739.723 233.464L741.723 230L745.723 230M739.727 312.136L741.727 315.6L745.727 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_183'
          d='M713.14 187.464L711.14 184L707.14 184M713.136 266.136L711.136 269.6L707.136 269.6M639.005 223.336L637.005 226.8L639.005 230.264M733.846 223.336L735.846 226.8L733.846 230.264M659.72 187.464L661.72 184L665.72 184M659.724 266.136L661.724 269.6L665.724 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_184'
          d='M793.164 325.464L791.164 322L787.164 322M793.16 404.136L791.16 407.6L787.16 407.6M719.028 361.336L717.028 364.8L719.028 368.264M813.87 361.336L815.87 364.8L813.87 368.264M739.744 325.464L741.744 322L745.744 322M739.748 404.136L741.748 407.6L745.748 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_185'
          d='M713.161 279.464L711.161 276L707.161 276M713.157 358.136L711.157 361.6L707.157 361.6M639.025 315.336L637.025 318.8L639.025 322.264M733.867 315.336L735.867 318.8L733.867 322.264M659.741 279.464L661.741 276L665.741 276M659.745 358.136L661.745 361.6L665.745 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_186'
          d='M793.139 50.4641L791.139 47L787.139 47M793.134 129.136L791.134 132.6L787.134 132.6M719.003 86.3359L717.003 89.8L719.003 93.2641M813.845 86.3359L815.845 89.8L813.845 93.2641M739.718 50.4641L741.718 47L745.718 47M739.723 129.136L741.723 132.6L745.723 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_187'
          d='M713.136 4.46411L711.136 1.00001L707.136 1M713.132 83.1359L711.132 86.6L707.132 86.6M639 40.3359L637 43.8L639 47.2641M733.842 40.3359L735.842 43.8L733.842 47.2641M659.716 4.46411L661.716 1.00001L665.716 1M659.72 83.1359L661.72 86.6L665.72 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_188'
          d='M793.159 142.464L791.159 139L787.159 139M793.155 221.136L791.155 224.6L787.155 224.6M719.024 178.336L717.024 181.8L719.024 185.264M813.865 178.336L815.865 181.8L813.865 185.264M739.739 142.464L741.739 139L745.739 139M739.743 221.136L741.743 224.6L745.743 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_189'
          d='M713.157 96.4641L711.157 93L707.157 93M713.152 175.136L711.152 178.6L707.152 178.6M639.021 132.336L637.021 135.8L639.021 139.264M733.862 132.336L735.862 135.8L733.862 139.264M659.736 96.4641L661.736 93L665.736 93M659.74 175.136L661.74 178.6L665.74 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_190'
          d='M793.148 599.464L791.148 596L787.148 596M793.144 678.136L791.144 681.6L787.144 681.6M719.012 635.336L717.012 638.8L719.012 642.264M813.854 635.336L815.854 638.8L813.854 642.264M739.728 599.464L741.728 596L745.728 596M739.732 678.136L741.732 681.6L745.732 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_191'
          d='M713.145 553.464L711.145 550L707.145 550M713.141 632.136L711.141 635.6L707.141 635.6M639.009 589.336L637.009 592.8L639.009 596.264M733.851 589.336L735.851 592.8L733.851 596.264M659.725 553.464L661.725 550L665.725 550M659.729 632.136L661.729 635.6L665.729 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_192'
          d='M713.166 645.464L711.166 642L707.166 642M713.161 724.136L711.161 727.6L707.161 727.6M639.03 681.336L637.03 684.8L639.03 688.264M733.872 681.336L735.872 684.8L733.872 688.264M659.745 645.464L661.745 642L665.745 642M659.75 724.136L661.75 727.6L665.75 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_193'
          d='M793.143 416.464L791.143 413L787.143 413M793.139 495.136L791.139 498.6L787.139 498.6M719.007 452.336L717.007 455.8L719.007 459.264M813.849 452.336L815.849 455.8L813.849 459.264M739.723 416.464L741.723 413L745.723 413M739.727 495.136L741.727 498.6L745.727 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_194'
          d='M713.14 370.464L711.14 367L707.14 367M713.136 449.136L711.136 452.6L707.136 452.6M639.005 406.336L637.005 409.8L639.005 413.264M733.846 406.336L735.846 409.8L733.846 413.264M659.72 370.464L661.72 367L665.72 367M659.724 449.136L661.724 452.6L665.724 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_195'
          d='M793.164 508.464L791.164 505L787.164 505M793.16 587.136L791.16 590.6L787.16 590.6M719.028 544.336L717.028 547.8L719.028 551.264M813.87 544.336L815.87 547.8L813.87 551.264M739.744 508.464L741.744 505L745.744 505M739.748 587.136L741.748 590.6L745.748 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_196'
          d='M713.161 462.464L711.161 459L707.161 459M713.157 541.136L711.157 544.6L707.157 544.6M639.025 498.336L637.025 501.8L639.025 505.264M733.867 498.336L735.867 501.8L733.867 505.264M659.741 462.464L661.741 459L665.741 459M659.745 541.136L661.745 544.6L665.745 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_197'
          d='M952.148 233.464L950.148 230L946.148 230M952.144 312.136L950.144 315.6L946.144 315.6M878.012 269.336L876.012 272.8L878.012 276.264M972.854 269.336L974.854 272.8L972.854 276.264M898.728 233.464L900.728 230L904.728 230M898.732 312.136L900.732 315.6L904.732 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_198'
          d='M872.145 187.464L870.145 184L866.145 184M872.141 266.136L870.141 269.6L866.141 269.6M798.009 223.336L796.009 226.8L798.009 230.264M892.851 223.336L894.851 226.8L892.851 230.264M818.725 187.464L820.725 184L824.725 184M818.729 266.136L820.729 269.6L824.729 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_199'
          d='M952.169 325.464L950.169 322L946.169 322M952.164 404.136L950.164 407.6L946.164 407.6M878.033 361.336L876.033 364.8L878.033 368.264M972.874 361.336L974.874 364.8L972.874 368.264M898.748 325.464L900.748 322L904.748 322M898.752 404.136L900.752 407.6L904.752 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_200'
          d='M872.166 279.464L870.166 276L866.166 276M872.161 358.136L870.161 361.6L866.161 361.6M798.03 315.336L796.03 318.8L798.03 322.264M892.872 315.336L894.872 318.8L892.872 322.264M818.745 279.464L820.745 276L824.745 276M818.75 358.136L820.75 361.6L824.75 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_201'
          d='M952.143 50.4641L950.143 47L946.143 47M952.139 129.136L950.139 132.6L946.139 132.6M878.007 86.3359L876.007 89.8L878.007 93.2641M972.849 86.3359L974.849 89.8L972.849 93.2641M898.723 50.4641L900.723 47L904.723 47M898.727 129.136L900.727 132.6L904.727 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_202'
          d='M872.14 4.46411L870.14 1.00001L866.14 1M872.136 83.1359L870.136 86.6L866.136 86.6M798.005 40.3359L796.005 43.8L798.005 47.2641M892.846 40.3359L894.846 43.8L892.846 47.2641M818.72 4.46411L820.72 1.00001L824.72 1M818.724 83.1359L820.724 86.6L824.724 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_203'
          d='M952.164 142.464L950.164 139L946.164 139M952.16 221.136L950.16 224.6L946.16 224.6M878.028 178.336L876.028 181.8L878.028 185.264M972.87 178.336L974.87 181.8L972.87 185.264M898.744 142.464L900.744 139L904.744 139M898.748 221.136L900.748 224.6L904.748 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_204'
          d='M872.161 96.4641L870.161 93L866.161 93M872.157 175.136L870.157 178.6L866.157 178.6M798.025 132.336L796.025 135.8L798.025 139.264M892.867 132.336L894.867 135.8L892.867 139.264M818.741 96.4641L820.741 93L824.741 93M818.745 175.136L820.745 178.6L824.745 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_205'
          d='M952.152 599.464L950.152 596L946.152 596M952.148 678.136L950.148 681.6L946.148 681.6M878.017 635.336L876.017 638.8L878.017 642.264M972.858 635.336L974.858 638.8L972.858 642.264M898.732 599.464L900.732 596L904.732 596M898.736 678.136L900.736 681.6L904.736 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_206'
          d='M872.15 553.464L870.15 550L866.15 550M872.145 632.136L870.145 635.6L866.145 635.6M798.014 589.336L796.014 592.8L798.014 596.264M892.855 589.336L894.855 592.8L892.855 596.264M818.729 553.464L820.729 550L824.729 550M818.734 632.136L820.734 635.6L824.734 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_207'
          d='M872.17 645.464L870.17 642L866.17 642M872.166 724.136L870.166 727.6L866.166 727.6M798.034 681.336L796.034 684.8L798.034 688.264M892.876 681.336L894.876 684.8L892.876 688.264M818.75 645.464L820.75 642L824.75 642M818.754 724.136L820.754 727.6L824.754 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_208'
          d='M952.148 416.464L950.148 413L946.148 413M952.144 495.136L950.144 498.6L946.144 498.6M878.012 452.336L876.012 455.8L878.012 459.264M972.854 452.336L974.854 455.8L972.854 459.264M898.728 416.464L900.728 413L904.728 413M898.732 495.136L900.732 498.6L904.732 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_209'
          d='M872.145 370.464L870.145 367L866.145 367M872.141 449.136L870.141 452.6L866.141 452.6M798.009 406.336L796.009 409.8L798.009 413.264M892.851 406.336L894.851 409.8L892.851 413.264M818.725 370.464L820.725 367L824.725 367M818.729 449.136L820.729 452.6L824.729 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_210'
          d='M952.169 508.464L950.169 505L946.169 505M952.164 587.136L950.164 590.6L946.164 590.6M878.033 544.336L876.033 547.8L878.033 551.264M972.874 544.336L974.874 547.8L972.874 551.264M898.748 508.464L900.748 505L904.748 505M898.752 587.136L900.752 590.6L904.752 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_211'
          d='M872.166 462.464L870.166 459L866.166 459M872.161 541.136L870.161 544.6L866.161 544.6M798.03 498.336L796.03 501.8L798.03 505.264M892.872 498.336L894.872 501.8L892.872 505.264M818.745 462.464L820.745 459L824.745 459M818.75 541.136L820.75 544.6L824.75 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_212'
          d='M1111.14 233.464L1109.14 230L1105.14 230M1111.13 312.136L1109.13 315.6L1105.13 315.6M1037 269.336L1035 272.8L1037 276.264M1131.84 269.336L1133.84 272.8L1131.84 276.264M1057.72 233.464L1059.72 230L1063.72 230M1057.72 312.136L1059.72 315.6L1063.72 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_213'
          d='M1031.15 187.464L1029.15 184L1025.15 184M1031.14 266.136L1029.14 269.6L1025.14 269.6M957.009 223.336L955.009 226.8L957.009 230.264M1051.85 223.336L1053.85 226.8L1051.85 230.264M977.725 187.464L979.725 184L983.725 184M977.729 266.136L979.729 269.6L983.729 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_214'
          d='M1111.14 325.464L1109.14 322L1105.14 322M1111.13 404.136L1109.13 407.6L1105.13 407.6M1037 361.336L1035 364.8L1037 368.264M1131.84 361.336L1133.84 364.8L1131.84 368.264M1057.72 325.464L1059.72 322L1063.72 322M1057.72 404.136L1059.72 407.6L1063.72 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_215'
          d='M1031.17 279.464L1029.17 276L1025.17 276M1031.16 358.136L1029.16 361.6L1025.16 361.6M957.03 315.336L955.03 318.8L957.03 322.264M1051.87 315.336L1053.87 318.8L1051.87 322.264M977.745 279.464L979.745 276L983.745 276M977.75 358.136L979.75 361.6L983.75 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_216'
          d='M1111.14 50.4641L1109.14 47L1105.14 47M1111.13 129.136L1109.13 132.6L1105.13 132.6M1037 86.3359L1035 89.8L1037 93.2641M1131.84 86.3359L1133.84 89.8L1131.84 93.2641M1057.72 50.4641L1059.72 47L1063.72 47M1057.72 129.136L1059.72 132.6L1063.72 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_217'
          d='M1031.14 4.46411L1029.14 1.00001L1025.14 1M1031.14 83.1359L1029.14 86.6L1025.14 86.6M957.005 40.3359L955.005 43.8L957.005 47.2641M1051.85 40.3359L1053.85 43.8L1051.85 47.2641M977.72 4.46411L979.72 1.00001L983.72 1M977.724 83.1359L979.724 86.6L983.724 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_218'
          d='M1111.14 142.464L1109.14 139L1105.14 139M1111.13 221.136L1109.13 224.6L1105.13 224.6M1037 178.336L1035 181.8L1037 185.264M1131.84 178.336L1133.84 181.8L1131.84 185.264M1057.72 142.464L1059.72 139L1063.72 139M1057.72 221.136L1059.72 224.6L1063.72 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_219'
          d='M1031.16 96.4641L1029.16 93L1025.16 93M1031.16 175.136L1029.16 178.6L1025.16 178.6M957.025 132.336L955.025 135.8L957.025 139.264M1051.87 132.336L1053.87 135.8L1051.87 139.264M977.741 96.4641L979.741 93L983.741 93M977.745 175.136L979.745 178.6L983.745 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_220'
          d='M1111.14 599.464L1109.14 596L1105.14 596M1111.13 678.136L1109.13 681.6L1105.13 681.6M1037 635.336L1035 638.8L1037 642.264M1131.84 635.336L1133.84 638.8L1131.84 642.264M1057.72 599.464L1059.72 596L1063.72 596M1057.72 678.136L1059.72 681.6L1063.72 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_221'
          d='M1031.15 553.464L1029.15 550L1025.15 550M1031.15 632.136L1029.15 635.6L1025.15 635.6M957.014 589.336L955.014 592.8L957.014 596.264M1051.86 589.336L1053.86 592.8L1051.86 596.264M977.729 553.464L979.729 550L983.729 550M977.734 632.136L979.734 635.6L983.734 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_222'
          d='M1031.17 645.464L1029.17 642L1025.17 642M1031.17 724.136L1029.17 727.6L1025.17 727.6M957.034 681.336L955.034 684.8L957.034 688.264M1051.88 681.336L1053.88 684.8L1051.88 688.264M977.75 645.464L979.75 642L983.75 642M977.754 724.136L979.754 727.6L983.754 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_223'
          d='M1111.14 416.464L1109.14 413L1105.14 413M1111.13 495.136L1109.13 498.6L1105.13 498.6M1037 452.336L1035 455.8L1037 459.264M1131.84 452.336L1133.84 455.8L1131.84 459.264M1057.72 416.464L1059.72 413L1063.72 413M1057.72 495.136L1059.72 498.6L1063.72 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_224'
          d='M1031.15 370.464L1029.15 367L1025.15 367M1031.14 449.136L1029.14 452.6L1025.14 452.6M957.009 406.336L955.009 409.8L957.009 413.264M1051.85 406.336L1053.85 409.8L1051.85 413.264M977.725 370.464L979.725 367L983.725 367M977.729 449.136L979.729 452.6L983.729 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_225'
          d='M1111.14 508.464L1109.14 505L1105.14 505M1111.13 587.136L1109.13 590.6L1105.13 590.6M1037 544.336L1035 547.8L1037 551.264M1131.84 544.336L1133.84 547.8L1131.84 551.264M1057.72 508.464L1059.72 505L1063.72 505M1057.72 587.136L1059.72 590.6L1063.72 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_226'
          d='M1031.17 462.464L1029.17 459L1025.17 459M1031.16 541.136L1029.16 544.6L1025.16 544.6M957.03 498.336L955.03 501.8L957.03 505.264M1051.87 498.336L1053.87 501.8L1051.87 505.264M977.745 462.464L979.745 459L983.745 459M977.75 541.136L979.75 544.6L983.75 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_227'
          d='M1269.14 233.464L1267.14 230L1263.14 230M1269.14 312.136L1267.14 315.6L1263.14 315.6M1195 269.336L1193 272.8L1195 276.264M1289.85 269.336L1291.85 272.8L1289.85 276.264M1215.72 233.464L1217.72 230L1221.72 230M1215.72 312.136L1217.72 315.6L1221.72 315.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_228'
          d='M1190.15 187.464L1188.15 184L1184.15 184M1190.15 266.136L1188.15 269.6L1184.15 269.6M1116.01 223.336L1114.01 226.8L1116.01 230.264M1210.86 223.336L1212.86 226.8L1210.86 230.264M1136.73 187.464L1138.73 184L1142.73 184M1136.73 266.136L1138.73 269.6L1142.73 269.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_229'
          d='M1269.14 325.464L1267.14 322L1263.14 322M1269.14 404.136L1267.14 407.6L1263.14 407.6M1195 361.336L1193 364.8L1195 368.264M1289.85 361.336L1291.85 364.8L1289.85 368.264M1215.72 325.464L1217.72 322L1221.72 322M1215.72 404.136L1217.72 407.6L1221.72 407.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_230'
          d='M1190.17 279.464L1188.17 276L1184.17 276M1190.17 358.136L1188.17 361.6L1184.17 361.6M1116.03 315.336L1114.03 318.8L1116.03 322.264M1210.88 315.336L1212.88 318.8L1210.88 322.264M1136.75 279.464L1138.75 276L1142.75 276M1136.75 358.136L1138.75 361.6L1142.75 361.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_231'
          d='M1269.14 50.4641L1267.14 47L1263.14 47M1269.14 129.136L1267.14 132.6L1263.14 132.6M1195 86.3359L1193 89.8L1195 93.2641M1289.85 86.3359L1291.85 89.8L1289.85 93.2641M1215.72 50.4641L1217.72 47L1221.72 47M1215.72 129.136L1217.72 132.6L1221.72 132.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_232'
          d='M1190.14 4.46411L1188.14 1.00001L1184.14 1M1190.14 83.1359L1188.14 86.6L1184.14 86.6M1116.01 40.3359L1114.01 43.8L1116.01 47.2641M1210.85 40.3359L1212.85 43.8L1210.85 47.2641M1136.72 4.46411L1138.72 1.00001L1142.72 1M1136.73 83.1359L1138.73 86.6L1142.73 86.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_233'
          d='M1269.14 142.464L1267.14 139L1263.14 139M1269.14 221.136L1267.14 224.6L1263.14 224.6M1195 178.336L1193 181.8L1195 185.264M1289.85 178.336L1291.85 181.8L1289.85 185.264M1215.72 142.464L1217.72 139L1221.72 139M1215.72 221.136L1217.72 224.6L1221.72 224.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_234'
          d='M1190.17 96.4641L1188.17 93L1184.17 93M1190.16 175.136L1188.16 178.6L1184.16 178.6M1116.03 132.336L1114.03 135.8L1116.03 139.264M1210.87 132.336L1212.87 135.8L1210.87 139.264M1136.75 96.4641L1138.75 93L1142.75 93M1136.75 175.136L1138.75 178.6L1142.75 178.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_235'
          d='M1269.14 599.464L1267.14 596L1263.14 596M1269.14 678.136L1267.14 681.6L1263.14 681.6M1195 635.336L1193 638.8L1195 642.264M1289.85 635.336L1291.85 638.8L1289.85 642.264M1215.72 599.464L1217.72 596L1221.72 596M1215.72 678.136L1217.72 681.6L1221.72 681.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_236'
          d='M1190.15 553.464L1188.15 550L1184.15 550M1190.15 632.136L1188.15 635.6L1184.15 635.6M1116.02 589.336L1114.02 592.8L1116.02 596.264M1210.86 589.336L1212.86 592.8L1210.86 596.264M1136.73 553.464L1138.73 550L1142.73 550M1136.74 632.136L1138.74 635.6L1142.74 635.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_237'
          d='M1190.17 645.464L1188.17 642L1184.17 642M1190.17 724.136L1188.17 727.6L1184.17 727.6M1116.04 681.336L1114.04 684.8L1116.04 688.264M1210.88 681.336L1212.88 684.8L1210.88 688.264M1136.75 645.464L1138.75 642L1142.75 642M1136.76 724.136L1138.76 727.6L1142.76 727.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_238'
          d='M1269.14 416.464L1267.14 413L1263.14 413M1269.14 495.136L1267.14 498.6L1263.14 498.6M1195 452.336L1193 455.8L1195 459.264M1289.85 452.336L1291.85 455.8L1289.85 459.264M1215.72 416.464L1217.72 413L1221.72 413M1215.72 495.136L1217.72 498.6L1221.72 498.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_239'
          d='M1190.15 370.464L1188.15 367L1184.15 367M1190.15 449.136L1188.15 452.6L1184.15 452.6M1116.01 406.336L1114.01 409.8L1116.01 413.264M1210.86 406.336L1212.86 409.8L1210.86 413.264M1136.73 370.464L1138.73 367L1142.73 367M1136.73 449.136L1138.73 452.6L1142.73 452.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_240'
          d='M1269.14 508.464L1267.14 505L1263.14 505M1269.14 587.136L1267.14 590.6L1263.14 590.6M1195 544.336L1193 547.8L1195 551.264M1289.85 544.336L1291.85 547.8L1289.85 551.264M1215.72 508.464L1217.72 505L1221.72 505M1215.72 587.136L1217.72 590.6L1221.72 590.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <path
          id='Vector_241'
          d='M1190.17 462.464L1188.17 459L1184.17 459M1190.17 541.136L1188.17 544.6L1184.17 544.6M1116.03 498.336L1114.03 501.8L1116.03 505.264M1210.88 498.336L1212.88 501.8L1210.88 505.264M1136.75 462.464L1138.75 459L1142.75 459M1136.75 541.136L1138.75 544.6L1142.75 544.6'
          stroke='var(--chevronGridCellStroke)'
        />
        <g id='react-icons/im/ImTab'>
          <path
            id='Vector_242'
            d='M160.125 253H164V275.5H160.125V253Z'
            fill='white'
          />
          <path
            id='Vector_243'
            d='M102 275.5H105.875V298H102V275.5Z'
            fill='white'
          />
          <path
            id='Vector_244'
            d='M121.375 283.938H164V289.562H121.375V296.594L107.812 286.75L121.375 276.906V283.938Z'
            fill='white'
          />
          <path
            id='Vector_245'
            d='M144.625 267.062H102V261.438H144.625V254.406L158.188 264.25L144.625 274.094V267.062Z'
            fill='white'
          />
        </g>
        <g id='react-icons/im/ImTarget'>
          <path
            id='Vector_246'
            d='M320 543.125H313.889C312.215 532.333 303.667 523.785 292.875 522.111V516H285.125V522.111C274.333 523.785 265.785 532.333 264.111 543.125H258V550.875H264.111C265.785 561.667 274.333 570.215 285.125 571.889V578H292.875V571.889C303.667 570.215 312.215 561.667 313.889 550.875H320V543.125ZM306.003 543.125H299.962C298.796 539.824 296.176 537.204 292.875 536.038V529.996C299.385 531.481 304.519 536.615 306.003 543.125ZM289 550.875C286.861 550.875 285.125 549.139 285.125 547C285.125 544.861 286.861 543.125 289 543.125C291.139 543.125 292.875 544.861 292.875 547C292.875 549.139 291.139 550.875 289 550.875ZM285.125 529.996V536.038C281.824 537.204 279.204 539.824 278.038 543.125H271.996C273.481 536.615 278.615 531.481 285.125 529.996ZM271.996 550.875H278.038C279.204 554.176 281.824 556.796 285.125 557.962V564.003C278.615 562.519 273.481 557.385 271.996 550.875ZM292.875 564.003V557.962C296.176 556.796 298.796 554.176 299.962 550.875H306.003C304.519 557.385 299.385 562.519 292.875 564.003Z'
            fill='white'
          />
        </g>
        <g id='react-icons/im/ImSpinner8'>
          <path
            id='Vector_247'
            d='M606 303C597.719 303 589.934 299.776 584.079 293.921C578.224 288.066 575 280.281 575 272C575 266.137 576.647 260.429 579.759 255.489C582.785 250.688 587.063 246.809 592.131 244.271L594.735 249.467C590.616 251.532 587.136 254.687 584.676 258.589C582.149 262.595 580.812 267.234 580.812 272C580.812 285.888 592.112 297.188 606 297.188C619.888 297.188 631.188 285.888 631.188 272C631.188 267.234 629.851 262.599 627.324 258.589C624.864 254.683 621.384 251.528 617.265 249.467L619.869 244.271C624.937 246.809 629.215 250.688 632.242 255.489C635.353 260.425 637 266.137 637 272C637 280.281 633.776 288.066 627.921 293.921C622.066 299.776 614.281 303 606 303Z'
            fill='white'
          />
        </g>
        {/* </g> */}
      </HexagonGridSvg>
    </HexagonGridMainContainer>
  );
};

export default HexagonGrid;
