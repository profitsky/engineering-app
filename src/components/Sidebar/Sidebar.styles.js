import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.ul`
  display: none;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: calc(100% - var(--headerHeight));
    background-color: var(--backgroundColor);
    top: var(--headerHeight);
    left: 0%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.3s ease-in-out;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }
`;

export const SidebarLink = styled(Link)`
  white-space: nowrap;
  padding: 0.2rem;
  font-size: 3rem;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  color: var(--white);
`;

export const SidebarItem = styled.li`
  line-height: 8rem;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover ${SidebarLink} {
    color: var(--orange);
  }
`;
