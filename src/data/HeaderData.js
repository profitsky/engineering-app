import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as VSCIcons from 'react-icons/vsc';
import * as RiIcons from 'react-icons/ri';
import * as ImIcons from 'react-icons/im';

export const links = [
  { name: 'home', path: '/', icon: <AiIcons.AiOutlineHome />, submenu: [] },
  {
    name: 'calculators',
    icon: <AiIcons.AiOutlineCalculator />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    path: '/calculators',
    submenu: [
      {
        name: 'fits and tolerances',
        path: 'calculators/fitsandtolerances',
        icon: <ImIcons.ImTab />,
      },
      {
        name: 'counterbore and countersink',
        path: 'calculators/counterboreandcountersink',
        icon: <ImIcons.ImTarget />,
      },
      {
        name: 'retaining rings',
        path: 'calculators/retainingrings',
        icon: <ImIcons.ImSpinner8 />,
      },
    ],
  },
  {
    name: 'cad generator',
    path: '/cad',
    icon: <MdIcons.Md3DRotation />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    submenu: [
      {
        name: 'standard parts generator',
        path: 'cad/stepgenerator',
        icon: <ImIcons.ImCart />,
      },
      {
        name: 'custom parts generator',
        path: 'cad/parasolidgenerator',
        icon: <ImIcons.ImPaintFormat />,
      },
    ],
  },
  { name: 'about', path: '/about', icon: <VSCIcons.VscGear />, submenu: [] },
];
