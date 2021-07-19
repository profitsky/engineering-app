import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: calc(100% - var(--headerHeight));
    min-height: 50rem;
    min-width: 320px;
    background-color: var(--backgroundColor);
    top: var(--headerHeight);
    left: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: flex-start;

    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }
`;

export const SidebarContainer = styled.li`
  padding: 1rem;
  width: 80%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
`;

export const SidebarLink = styled(Link)`
  white-space: nowrap;
  margin-left: 1rem;
  font-size: 3rem;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  color: var(--white);
  transition: all 0.3s ease-in-out;
`;

export const SidebarIcon = styled.div`
  color: var(--white);
  margin: 0.5rem 0;
  font-size: 4rem;
  left: 1rem;
  transition: all 0.3s ease-in-out;
`;

export const SubMenuIcon = styled.div`
  color: var(--white);
  font-size: 4rem;
  margin-left: 4rem;
  transition: all 0.3s ease-in-out;
`;

export const SidebarItem = styled.div`
  border-top: 1px solid var(--white);
  border-bottom: 1px solid var(--white);
  width: 100%;
  background-color: ${({ selected }) =>
    selected ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover ${SidebarLink} {
    color: var(--orange);
  }

  &:hover ${SidebarIcon} {
    color: var(--orange);
  }

  &:hover ${SubMenuIcon} {
    color: var(--orange);
  }
`;

export const SubMenuItem = styled(Link)`
  white-space: nowrap;
  padding: 0.5rem;
  font-size: 2.4rem;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  color: var(--white);
  transition: all 0.3s ease-in-out;
`;

export const SubMenuItemIcon = styled.div`
  color: var(--white);
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
`;

export const SubmenuItemContainer = styled.div`
  display: ${({ selected }) => (!selected ? 'none' : 'flex')};
  transition: display 0.2s;
  width: 90%;
  margin-top: 1rem;
  margin-left: 2rem;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--backgroundColor);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--bluishCyan);
  }

  &:hover ${SubMenuItem} {
    color: var(--orange);
  }
  &:hover ${SubMenuItemIcon} {
    color: var(--orange);
  }
`;

export const SubMenuIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;
