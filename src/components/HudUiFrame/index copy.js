import React from 'react';

import { motion } from 'framer-motion';

//STYLES
import { HudFrameWrapper, HudFrameSVG } from './HudUiFrame.styles';

//ANIMATION VARIANTS

const frameVariant = {
  hidden: { opacity: 0, x: '-100%', transition: { duration: 0.5 } },
  visible: { opacity: 0.5, x: 0, transition: { duration: 0.5 } },
};

const screenVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 0,
    transition: {
      duration: 2,
      delay: 1,
      ease: 'easeInOut',
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      delay: 0,
      ease: 'easeInOut',
    },
  },
};

const pathVariantsDelay = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 0.2,
    },
  },
};

const pathVariantsDelay2 = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: 'easeInOut',
    },
  },
};

const HudUiFrame = () => {
  return (
    <HudFrameWrapper>
      <HudFrameSVG
        width='4017'
        height='3146'
        viewBox='0 0 4017 3146'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        variants={frameVariant}
        initial='hidden'
        animate='visible'
      >
        <motion.g id='Group 1'>
          <filter
            id='fire'
            width='110%'
            height='110%'
            x='-10%'
            y='-10%'
            filterUnits='userSpaceOnUse'
          >
            <feFlood
              result='flood'
              flood-color='#ffaf46'
              flood-opacity='1'
            ></feFlood>
            <feComposite
              in='flood'
              result='mask'
              in2='SourceGraphic'
              operator='in'
            ></feComposite>
            <feMorphology
              in='mask'
              result='dilated'
              operator='dilate'
              radius='1.5'
            ></feMorphology>
            <feGaussianBlur
              in='dilated'
              result='blurred'
              stdDeviation='7'
            ></feGaussianBlur>
            <feMerge>
              <feMergeNode in='blurred'></feMergeNode>
              <feMergeNode in='SourceGraphic'></feMergeNode>
            </feMerge>
          </filter>
          <motion.path
            id='Subtract'
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M110.748 110.752L0 221.503V513.129V804.754L178 982.003L356 1159.25V1501.88V1844.5L268 1932.5L180 2020.5V2375V2729.5L299.748 2849.25L419.497 2969H1004.37H1589.25L1678.5 3057.5L1767.75 3146H2705.5H3643.25L3733.12 3056.88L3823 2967.75V2454.5V1941.25L3920 1845L4017 1748.75V1080.13V411.503L3880.75 275.251L3744.5 139H3242.1H2739.7L2701.67 177L2663.65 215H2221.57H1779.5L1672 107.5L1564.5 0H893H221.497L110.748 110.752ZM1658.5 138.5L1766.75 246H2221.63H2676.51L2714 208.5L2751.49 171H3242.49H3733.5L3859.75 297.249L3986 423.497V1079V1734.5L3889 1831.5L3792 1928.5L3791.96 2312.5L3791.92 2696.5L3713.71 2617.71L3635.5 2538.92L3323.5 2538.96L3011.49 2539L2967.5 2583L2923.51 2627H2266.2H1608.89L1529.39 2706.25C1485.67 2749.84 1415.5 2819.81 1373.46 2861.75L1297.03 2938H865.021H433.013L322.006 2826.98L211 2715.96V2374.45V2032.95L250.25 1993.54C271.837 1971.87 311.438 1932.06 338.25 1905.06L387 1855.99L386.958 1501.74L386.916 1147.5L209.499 969.5L32.081 791.5L32.041 512.303L32 233.105L133.115 132.053L234.231 31H892.239H1550.25L1658.5 138.5Z'
            fill='blue'
            variants={pathVariantsDelay}
          />
          <motion.path
            id='Vector'
            d='M1766.75 246L1658.5 138.5L1550.25 31H892.239H234.231L133.115 132.053L32 233.105L32.041 512.303L32.081 791.5L209.499 969.5L386.916 1147.5L386.958 1501.74L387 1855.99L338.25 1905.06C311.438 1932.06 271.837 1971.87 250.25 1993.54L211 2032.95V2374.45V2715.96L322.006 2826.98L433.013 2938H865.021H1297.03L1373.46 2861.75C1415.5 2819.81 1485.67 2749.84 1529.39 2706.25L1608.89 2627H2266.2H2923.51L2967.5 2583L3011.49 2539L3323.5 2538.96L3635.5 2538.92L3713.71 2617.71L3791.92 2696.5L3791.96 2312.5L3792 1928.5L3889 1831.5L3986 1734.5V1079V423.497L3859.75 297.249L3733.5 171H3242.49H2751.49L2714 208.5L2676.51 246H2221.63H1766.75Z'
            fill='rgba(0,1,0,0.1)'
            variants={screenVariants}
            filter='none'
          />
          {/* <motion.path
            id='Vector_2'
            d='M1167.21 91.754C1169.43 88.579 1176.21 84.371 1182.29 82.402C1186.69 80.976 1193.04 81.254 1200.91 83.217C1206.52 84.618 1211.83 89.841 1215.53 97.612C1219.81 106.591 1219.91 112.066 1215.94 120.474C1214.09 124.394 1210.78 129.237 1208.31 131.637C1204.61 135.229 1202.81 136.128 1196.53 137.526C1189.78 139.028 1188.64 139.037 1183.79 137.627C1177.54 135.811 1169.78 130.925 1167.15 127.157C1160.51 117.633 1160.54 101.321 1167.21 91.754Z'
            fill='none'
            variants={pathVariants}
          /> */}
          <motion.path
            id='Vector_3'
            d='M1237.04 99.6199C1240.2 91.1819 1245.18 86.275 1253.5 83.39C1258.98 81.49 1261.69 81.09 1266 81.542C1272.67 82.244 1281.26 86.327 1284.72 90.449C1294.92 102.565 1293.33 121.578 1281.26 131.893C1270.25 141.306 1252.51 140.178 1243.11 129.468C1235.35 120.63 1233.18 109.95 1237.04 99.6199Z'
            fill='blue'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_4'
            d='M1309.21 111.5C1308.39 98.984 1315.49 87.775 1327 83.439C1337.82 79.363 1348.51 81.467 1356.28 89.201C1362.71 95.612 1365.37 101.727 1365.32 110C1365.27 118.355 1362.7 124.206 1356.26 130.649C1345.35 141.555 1327.8 141.245 1317.66 129.967C1311.86 123.517 1309.69 118.781 1309.21 111.5Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_5'
            d='M1385.04 97.412C1388.46 90.247 1391.89 87.179 1400.61 83.472C1405.38 81.443 1407.54 81.074 1412 81.521C1421.18 82.442 1425.17 84.121 1430.28 89.201C1436.59 95.484 1439.28 101.674 1439.32 110C1439.37 118.129 1436.86 123.359 1429.42 130.617C1423.45 136.449 1419.14 138.264 1411.04 138.351C1389.55 138.581 1375.76 116.863 1385.04 97.412Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_6'
            d='M1459.31 94.728C1462.46 89.357 1467.66 85.502 1475.31 82.857C1481.44 80.74 1482.13 80.697 1489.01 82.001C1499.92 84.071 1506.08 89.082 1510.39 99.395C1512.44 104.301 1512.47 114.64 1510.44 119.491C1506.13 129.794 1500.07 135.074 1489.57 137.665C1483.84 139.081 1482.77 139.076 1477.75 137.617C1470.25 135.435 1463.11 130.299 1459.5 124.488C1456.68 119.954 1456.5 119.036 1456.5 109.578C1456.5 100.336 1456.73 99.104 1459.31 94.728Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_7'
            d='M2229.29 163.308C2228.8 162.037 2232.97 157.446 2246.07 144.841L2263.5 128.066L2287.78 128.033C2309.63 128.003 2312.13 128.169 2312.71 129.682C2313.19 130.941 2308.96 135.591 2295.93 148.144L2278.5 164.923L2254.22 164.962C2232.31 164.996 2229.87 164.834 2229.29 163.308Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_8'
            d='M2314.63 149.745C2321.71 143.034 2329.53 135.435 2332 132.857L2336.5 128.171L2360.78 128.086C2382.14 128.01 2385.14 128.192 2385.68 129.595C2386.11 130.731 2381.42 136.066 2369.41 148.095L2352.52 165H2327.73C2306.42 165 2302.86 164.785 2302.35 163.474C2301.95 162.427 2305.81 158.116 2314.63 149.745Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_9'
            d='M2375.29 163.308C2374.8 162.037 2378.97 157.446 2392.07 144.841L2409.5 128.066L2433.78 128.033C2455.68 128.003 2458.13 128.166 2458.71 129.691C2459.2 130.96 2455.02 135.575 2441.98 148.191L2424.6 165H2400.27C2378.34 165 2375.87 164.833 2375.29 163.308Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_10'
            d='M2449.29 163.308C2448.8 162.037 2452.97 157.446 2466.07 144.841L2483.5 128.066L2507.78 128.033C2529.63 128.003 2532.13 128.169 2532.71 129.682C2533.19 130.941 2528.96 135.591 2515.93 148.144L2498.5 164.923L2474.22 164.962C2452.31 164.996 2449.87 164.834 2449.29 163.308Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_11'
            d='M2523.29 163.308C2522.8 162.037 2526.97 157.446 2540.07 144.841L2557.5 128.066L2581.28 128.033C2602.15 128.004 2605.14 128.195 2605.67 129.595C2606.11 130.731 2601.42 136.066 2589.4 148.095L2572.52 165H2548.23C2526.33 165 2523.87 164.833 2523.29 163.308Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_12'
            d='M2596.35 163.471C2595.95 162.422 2601.07 156.631 2612.63 145.055L2629.5 128.168L2654.28 128.084C2676.63 128.008 2679.13 128.165 2679.71 129.682C2680.19 130.941 2675.96 135.591 2662.93 148.144L2645.5 164.923L2621.22 164.962C2600.33 164.995 2596.86 164.786 2596.35 163.471Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_13'
            d='M203.946 147.053C208.112 142.995 210.077 141.883 215.244 140.659C223.04 138.812 224.557 138.749 229.342 140.078C234.367 141.473 243.994 149.006 247.399 154.207C251.813 160.949 252.623 165.642 250.709 173.395C248.507 182.321 244.405 188.002 236.849 192.592C231.471 195.858 229.807 196.36 223.712 196.549L216.733 196.766L172.872 242.133L129.011 287.5L129.006 502.224L129 716.947L133.542 721.49C140.181 728.128 142.329 733.738 141.679 742.741C141.242 748.785 140.552 750.976 137.504 755.994C130.235 767.959 118.014 772.569 104.332 768.506C100.567 767.388 98.0381 765.676 94.2761 761.698C87.6101 754.65 85.7941 750.854 85.2151 742.755C84.5851 733.959 86.6351 728.535 93.0941 721.903L98.0001 716.867L98.0141 496.183L98.0271 275.5L146.264 225.247L194.5 174.995L194.543 168.247C194.598 159.576 197.269 153.556 203.946 147.053Z'
            fill='blue'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_14'
            d='M3915 536.427C3915 462.676 3915.3 402.033 3915.67 401.667C3916.03 401.3 3916.68 401 3917.1 401C3917.51 401 3925.76 408.85 3935.43 418.444L3953 435.888V569.321C3953 689.132 3952.84 702.888 3951.44 704.053C3950.09 705.174 3947.5 702.98 3932.44 687.936L3915 670.521V536.427Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_15'
            d='M3915 751.927C3915 738.951 3915.3 728.033 3915.67 727.667C3916.03 727.3 3916.64 727 3917.02 727C3917.4 727 3925.65 734.891 3935.35 744.535L3953 762.07V784.913C3953 804.412 3952.77 807.945 3951.44 809.053C3950.09 810.174 3947.5 807.98 3932.44 792.936L3915 775.521V751.927Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_16'
            d='M3915 824.928C3915 811.951 3915.3 801.033 3915.67 800.667C3917.34 798.992 3919.83 801.108 3935.9 817.898L3953.04 835.796L3952.77 858.635C3952.52 880.116 3952.39 881.495 3950.61 881.837C3949.26 882.096 3943.9 877.389 3931.86 865.361L3915 848.522V824.928Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_17'
            d='M3915 921.521V897.761C3915 875.852 3915.14 874 3916.74 874C3917.7 874 3926.25 881.758 3935.74 891.239L3953 908.479V931.771C3953 952.173 3952.8 955.139 3951.4 955.675C3950.27 956.111 3944.8 951.285 3932.4 938.904L3915 921.521Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_18'
            d='M3915 971.927C3915 958.951 3915.3 948.033 3915.67 947.667C3916.03 947.3 3916.59 947 3916.91 947C3917.22 947 3925.47 954.983 3935.24 964.74L3953 982.479V1005.77C3953 1026.17 3952.8 1029.14 3951.4 1029.68C3950.27 1030.11 3944.8 1025.29 3932.4 1012.9L3915 995.521V971.927Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_19'
            d='M3915 1045.93C3915 1032.95 3915.3 1022.03 3915.67 1021.67C3916.03 1021.3 3916.72 1021 3917.19 1021C3917.66 1021 3925.92 1028.82 3935.54 1038.39L3953.04 1055.77L3952.77 1079.12C3952.52 1101.11 3952.39 1102.5 3950.61 1102.84C3949.26 1103.1 3943.9 1098.39 3931.86 1086.36L3915 1069.52V1045.93Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_20'
            d='M3915 1118.67C3915 1105.84 3915.3 1095.03 3915.67 1094.67C3916.03 1094.3 3916.83 1094 3917.43 1094C3918.03 1094 3926.29 1101.78 3935.78 1111.28L3953.04 1128.56L3952.77 1152.02C3952.53 1172.94 3952.32 1175.51 3950.84 1175.79C3949.79 1175.99 3942.9 1169.85 3932.09 1159.06L3915 1142.01V1118.67Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_21'
            d='M152.291 1900.32C155.996 1896.1 162.729 1891.37 166.039 1890.67C167.392 1890.38 172.1 1890.29 176.5 1890.47C188.059 1890.94 192.615 1893.2 198.421 1901.34C202.442 1906.97 203.14 1908.7 203.662 1914.29C204.575 1924.06 202.827 1929.67 196.748 1936.49C190.425 1943.59 185.233 1946 176.288 1946H169.742L149.371 1965.61L129 1985.22V2238.43V2491.64L133.578 2496.42C140.288 2503.42 142.325 2508.78 141.679 2517.74C141.242 2523.78 140.552 2525.98 137.504 2530.99C128.098 2546.48 108.139 2549.92 96.1761 2538.11C88.0781 2530.12 85.8001 2525.94 85.2321 2518C84.5871 2508.98 86.4941 2503.83 93.0661 2496.83L98.0001 2491.58V2232.03V1972.48L122.818 1947.68C145.595 1924.92 147.6 1922.64 147.205 1919.94C146.377 1914.3 149.044 1904.02 152.291 1900.32Z'
            fill='blue'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_22'
            d='M3862.75 1956.93C3865.36 1954.5 3871.55 1949.02 3876.5 1944.75C3881.45 1940.48 3886.17 1937.11 3887 1937.26C3888.32 1937.5 3888.53 1953.51 3888.75 2073.12L3889.01 2208.72L3886.35 2211.38C3878.76 2218.97 3860.84 2233.15 3859.49 2232.63C3858.18 2232.13 3858 2215.57 3858 2096.71V1961.36L3862.75 1956.93Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_23'
            d='M3877 2269.57C3878.92 2268.29 3881.61 2266.04 3882.96 2264.59C3884.31 2263.13 3886.11 2262.07 3886.96 2262.23C3888.29 2262.49 3888.54 2265.88 3888.77 2287.1L3889.03 2311.67L3875.43 2323.58C3867.94 2330.14 3861.07 2335.5 3860.16 2335.5C3858.67 2335.5 3858.47 2333.04 3858.23 2311.06L3857.96 2286.61L3865.73 2279.25C3870 2275.21 3875.08 2270.85 3877 2269.57Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_24'
            d='M3857.97 2359.39L3871.73 2347.21C3879.3 2340.51 3886.29 2335.02 3887.25 2335.01C3888.87 2335 3889 2336.85 3889 2359.88V2384.76L3882.25 2390.63C3878.54 2393.85 3872.23 2399.57 3868.22 2403.32C3864.22 2407.08 3860.4 2409.97 3859.72 2409.74C3858.81 2409.44 3858.43 2402.97 3858.23 2384.36L3857.97 2359.39Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_25'
            d='M3857.97 2433.3L3872.23 2420.69C3880.08 2413.75 3886.95 2408.21 3887.5 2408.37C3888.12 2408.55 3888.6 2417.92 3888.77 2433.15L3889.03 2457.63L3875.49 2469.57C3868.04 2476.13 3861.17 2481.5 3860.22 2481.5C3858.65 2481.5 3858.48 2479.43 3858.23 2457.4L3857.97 2433.3Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_26'
            d='M3857.97 2507.27L3872.23 2494.66C3880.08 2487.73 3886.95 2482.2 3887.5 2482.36C3888.12 2482.55 3888.6 2491.94 3888.77 2507.17L3889.03 2531.67L3875.43 2543.58C3867.94 2550.14 3861.07 2555.5 3860.16 2555.5C3858.67 2555.5 3858.47 2553.07 3858.23 2531.38L3857.97 2507.27Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_27'
            d='M3864.16 2574.57C3867.57 2571.23 3873.76 2565.47 3877.93 2561.77C3882.09 2558.07 3886.17 2555.15 3887 2555.29C3888.28 2555.49 3888.54 2559.14 3888.77 2579.83C3889.01 2601.86 3888.87 2604.35 3887.26 2606.4C3883.88 2610.69 3861.82 2629.5 3860.16 2629.5C3858.67 2629.5 3858.47 2627.07 3858.23 2605.07L3857.96 2580.63L3864.16 2574.57Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_28'
            d='M3858 2653.26L3871.75 2641.15C3879.31 2634.49 3886.29 2629.03 3887.25 2629.02C3888.87 2629 3889 2630.84 3889 2653.78V2678.57L3875.26 2690.28C3867.71 2696.73 3860.73 2702 3859.76 2702C3858.13 2702 3858 2700.24 3858 2677.63V2653.26Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_29'
            d='M3541 2778.51L3515.76 2753.26L3490.51 2728H2727H1963.48L1938.24 2753.26L1913 2778.51V2876.51V2974.51L1938.76 3000.26L1964.51 3026H2727.51H3490.51L3515.76 3000.74L3541 2975.49V2877V2778.51Z'
            fill='none'
            // fill='#08151B'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_30'
            d='M440.308 2865.74C444.487 2859.72 449.04 2856.22 454.358 2854.95C459.416 2853.75 467.54 2853.9 470.635 2855.26C486.431 2862.19 494.155 2877.13 489.2 2891.19C483.688 2906.82 469.825 2914 453.193 2909.82C449.654 2908.93 447.129 2907.27 442.926 2903.07C436.722 2896.87 434 2890.74 434 2882.97C434 2876.76 435.498 2872.66 440.308 2865.74Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_31'
            d='M509.594 2893.07C504.832 2876.84 512.231 2860.61 526.748 2855.43C544.03 2849.26 564.204 2863.77 564.399 2882.5C564.605 2902.29 546.836 2915.02 526.248 2909.83C519.491 2908.13 511.719 2900.31 509.594 2893.07Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_32'
            d='M591.586 2860.85C594.557 2858.6 598.679 2856.16 600.744 2855.43C613.208 2850.98 628.735 2857.52 634.591 2869.68C640.519 2881.99 637.209 2898.37 627.396 2905.29C620.914 2909.86 615.667 2911.31 607.516 2910.78C598.959 2910.23 594.292 2908.13 587.967 2901.97C576.258 2890.56 577.968 2871.13 591.586 2860.85Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_33'
            d='M665.812 2860.52C668.941 2858.02 672.85 2855.57 674.5 2855.08C685.02 2851.93 698.102 2856.2 704.207 2864.76C709.095 2871.61 710.492 2875.66 710.496 2883C710.503 2894.19 704.998 2903.25 695.295 2908.03C689.143 2911.06 688.212 2911.23 681.01 2910.74C671.982 2910.12 668.907 2908.73 662.26 2902.25C649.979 2890.29 651.543 2871.92 665.812 2860.52Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_34'
            d='M728.256 2885.6C727.182 2872.22 734.926 2859.65 746.885 2855.38C748.873 2854.67 753.226 2854.07 756.559 2854.04C761.742 2854.01 763.476 2854.51 768.559 2857.52C782.126 2865.56 787.709 2878.4 783.2 2891.19C778.74 2903.84 769.013 2910.95 756.116 2910.99C748.52 2911.01 743.572 2909.26 738.425 2904.73C731.978 2899.05 728.866 2893.2 728.256 2885.6Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_35'
            d='M850.202 3020.79C849.408 3019.85 849.023 3018.38 849.347 3017.54C849.874 3016.17 864.444 3016 985.314 3016H1120.69L1132.6 3030.11C1139.14 3037.88 1144.5 3044.74 1144.5 3045.36C1144.5 3046.21 1109.24 3046.57 1008.44 3046.75L872.379 3047.01L862.013 3034.75C856.312 3028.01 850.997 3021.73 850.202 3020.79Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_36'
            d='M1175.2 3020.79C1174.41 3019.85 1174.02 3018.38 1174.35 3017.54C1174.86 3016.21 1178.26 3016 1198.86 3016H1222.79L1235.14 3030.08C1241.94 3037.83 1247.5 3044.69 1247.5 3045.33C1247.5 3046.18 1240.73 3046.57 1222.45 3046.77L1197.4 3047.03L1187.02 3034.77C1181.32 3028.02 1176 3021.73 1175.2 3020.79Z'
            fill='none'
            variants={pathVariants}
          />
          <motion.path
            id='Vector_37'
            d='M1261.53 3035.88C1247.21 3019.73 1246.74 3019.12 1247.37 3017.49C1247.85 3016.23 1251.68 3016 1272.35 3016H1296.75L1309.13 3030.1C1315.93 3037.86 1321.5 3044.72 1321.5 3045.35C1321.5 3046.18 1314.45 3046.58 1296.46 3046.77L1271.42 3047.03L1261.53 3035.88Z'
            fill='none'
            variants={pathVariantsDelay}
          />
          <motion.path
            id='Vector_38'
            d='M1328.96 3029C1327.44 3029 1319.86 3018.81 1320.38 3017.46C1320.85 3016.23 1324.91 3016 1345.79 3016H1370.64L1382.07 3029.52C1388.36 3036.96 1393.64 3043.93 1393.82 3045.02C1394.13 3046.95 1393.5 3047 1369.6 3047H1345.07L1337.34 3038C1333.08 3033.05 1329.31 3029 1328.96 3029Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_39'
            d='M1412.43 3040.25C1395.15 3020.72 1393.78 3019.01 1394.35 3017.53C1394.85 3016.22 1398.29 3016 1418.66 3016H1442.39L1449.34 3023.25C1453.17 3027.24 1458.49 3033.28 1461.18 3036.68C1463.87 3040.08 1466.58 3043.03 1467.21 3043.24C1467.84 3043.45 1468.07 3044.38 1467.71 3045.31C1467.13 3046.83 1464.65 3047 1442.73 3047H1418.41L1412.43 3040.25Z'
            fill='none'
            variants={pathVariantsDelay}
          />
          <motion.path
            id='Vector_40'
            d='M1469.2 3020.79C1468.41 3019.85 1468.02 3018.38 1468.35 3017.54C1468.86 3016.21 1472.26 3016 1492.85 3016H1516.75L1529.13 3030.1C1535.93 3037.86 1541.5 3044.72 1541.5 3045.35C1541.5 3046.18 1534.45 3046.58 1516.45 3046.77L1491.4 3047.03L1481.02 3034.77C1475.32 3028.02 1470 3021.73 1469.2 3020.79Z'
            fill='none'
            variants={pathVariantsDelay2}
          />
          <motion.path
            id='Vector_41'
            d='M1555.53 3035.88C1541.21 3019.73 1540.74 3019.12 1541.37 3017.49C1541.85 3016.23 1545.67 3016 1566.28 3016H1590.63L1602.56 3030.12C1609.13 3037.88 1614.5 3044.75 1614.5 3045.37C1614.5 3046.17 1607.4 3046.58 1589.96 3046.77L1565.42 3047.03L1555.53 3035.88Z'
            fill='none'
            variants={pathVariantsDelay}
          />
        </motion.g>
      </HudFrameSVG>
    </HudFrameWrapper>
  );
};

export default HudUiFrame;
