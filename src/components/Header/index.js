import React from 'react';

// STYLED ELEMENTS
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderNavContainer,
  LogoLink,
  LogoName,
  LogoIcon,
  NavItem,
  NavLink,
  MobileIcon,
} from './Header.styles';
//IMAGES
import APPlogo from '../../images/logo.svg';

//ICONS
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Header = ({ links, toggle, isOpen }) => {
  // header logo functionality - returns function or null if side bar is opened
  const logoLinkFunction = isOpen ? toggle : null;

  //FUNCTIONS

  const nawMenuItems = links.map((item, index) => (
    <NavItem key={index}>
      <span></span>
      <span></span>
      <NavLink to={item.path}>{item.name}</NavLink>
    </NavItem>
  ));

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <LogoLink to='/' onClick={logoLinkFunction}>
          <LogoIcon src={APPlogo} alt='logo' />
        </LogoLink>
        <LogoName>engineering app</LogoName>
      </HeaderLogoContainer>
      <HeaderNavContainer>{nawMenuItems}</HeaderNavContainer>
      <MobileIcon onClick={toggle}>
        {isOpen ? <ImCross /> : <FaBars />}
      </MobileIcon>
    </HeaderContainer>
  );
};

export default Header;
