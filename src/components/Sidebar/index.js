import React from 'react';

// STYLED ELEMENTS
import { SidebarContainer, SidebarItem, SidebarLink } from './Sidebar.styles';

const Sidebar = ({ links, isOpen, toggle }) => {
  const sidebarMenuItems = links.map((item, index) => {
    return (
      <SidebarItem key={index} onClick={toggle}>
        <SidebarLink to={item.path}>{item.name}</SidebarLink>
      </SidebarItem>
    );
  });

  return (
    <SidebarContainer isOpen={isOpen}>{sidebarMenuItems}</SidebarContainer>
  );
};

export default Sidebar;
