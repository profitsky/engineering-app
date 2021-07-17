import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background-color: var(--bluishCyan);
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
`;

export const LogoLink = styled(Link)`
  margin-left: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 140%;
    height: 140%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.2rem solid var(--orange);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  :hover::before {
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }
`;

export const LogoIcon = styled.img`
  height: 4rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LogoName = styled.h1`
  margin: 0 1rem;
  min-width: 19rem;
  font-weight: 300;
  text-transform: capitalize;
`;

export const HeaderNavContainer = styled.ul`
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  position: relative;

  span:nth-child(1) {
    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      left: 0;
      width: 0.8rem;
      height: 0.8rem;
      background-color: transparent;
      border-top: 2px solid var(--orange);
      border-left: 2px solid var(--orange);
      transition: all 0.3s;
      opacity: 0;
    }
    &::after {
      position: absolute;
      content: '';
      display: block;
      bottom: 0;
      left: 0;
      width: 0.8rem;
      height: 0.8rem;
      background-color: transparent;
      border-bottom: 2px solid var(--orange);
      border-left: 2px solid var(--orange);
      transition: all 0.3s;
      opacity: 0;
    }
  }
  span:nth-child(2) {
    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 0;
      right: 0;
      width: 0.8rem;
      height: 0.8rem;
      background-color: transparent;
      border-top: 2px solid var(--orange);
      border-right: 2px solid var(--orange);
      transition: all 0.3s;
      opacity: 0;
    }
    &::after {
      position: absolute;
      content: '';
      display: block;
      bottom: 0;
      right: 0;
      width: 0.8rem;
      height: 0.8rem;
      background-color: transparent;
      border-bottom: 2px solid var(--orange);
      border-right: 2px solid var(--orange);
      transition: all 0.3s ease-in-out;
      opacity: 0;
    }
  }

  &:hover span:nth-child(1)::before {
    opacity: 1;
    top: -0.1rem;
    left: -0.5rem;
    width: 2rem;
    height: 1.4rem;
  }
  &:hover span:nth-child(1)::after {
    opacity: 1;
    bottom: -0.1rem;
    left: -0.5rem;
    width: 2rem;
    height: 1.4rem;
  }

  &:hover span:nth-child(2)::before {
    opacity: 1;
    top: -0.1rem;
    right: -0.5rem;
    width: 2rem;
    height: 1.4rem;
  }

  &:hover span:nth-child(2)::after {
    opacity: 1;
    bottom: -0.1rem;
    right: -0.5rem;
    width: 2rem;
    height: 1.4rem;
  }
`;
export const NavLink = styled(Link)`
  white-space: nowrap;
  padding: 0.2rem;
  font-size: 2.5rem;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  color: var(--white);

  &:hover {
    color: var(--orange);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    margin-right: 2rem;
    cursor: pointer;
    color: var(--white);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--orange);
    }
  }
`;
