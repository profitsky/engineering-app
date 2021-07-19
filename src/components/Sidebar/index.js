import React, { useState, useRef, useEffect } from 'react';

//COMPONENTS
import Submenu from '../Submenu';

// STYLED ELEMENTS
import {
  SidebarWrapper,
  SidebarContainer,
  SidebarItem,
  SidebarLink,
  SidebarIcon,
  SubMenuIconWrapper,
  SubMenuIcon,
  SubMenuItem,
  SubmenuItemContainer,
  SubMenuItemIcon,
} from './Sidebar.styles';

const Sidebar = ({ links, isOpen, toggle }) => {
  //HOOKS

  const usePrevious = (valve) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = valve;
    });

    return ref.current;
  };

  const [selected, setSelected] = useState(null);
  const prevSelected = usePrevious(selected);

  //FUNCTIONS
  const handleMenuItemSelected = (name, current, previous) => {
    if (name === current) {
      setSelected(null);
    } else if (
      (current && !previous) ||
      name === previous ||
      (name && !current)
    ) {
      setSelected(name);
    }
  };

  //JSX COMPONENTS
  const sidebarMenuItems = links.map((sidebarMenuItem, sibarMenuIndex) => {
    const isItemSelected = selected === sidebarMenuItem.name;
    const hasSubmenu = sidebarMenuItem.submenu.length;

    const subMenus = sidebarMenuItem.submenu.map((subMenu, subMenuIndex) => {
      return (
        <SubmenuItemContainer key={subMenuIndex} selected={isItemSelected}>
          <SubMenuItemIcon>{subMenu.icon}</SubMenuItemIcon>
          <SubMenuItem to={subMenu.path}>{subMenu.name}</SubMenuItem>
        </SubmenuItemContainer>
      );
    });

    return (
      <SidebarContainer key={sibarMenuIndex}>
        <SidebarItem
          selected={isItemSelected}
          current={selected}
          previous={prevSelected}
          onClick={
            hasSubmenu
              ? () =>
                  handleMenuItemSelected(
                    sidebarMenuItem.name,
                    selected,
                    prevSelected
                  )
              : toggle
          }
        >
          <SidebarIcon>{sidebarMenuItem.icon}</SidebarIcon>
          <SidebarLink to={sidebarMenuItem.path}>
            {sidebarMenuItem.name}
          </SidebarLink>
          {hasSubmenu ? (
            <SubMenuIconWrapper>
              <SubMenuIcon>
                {isItemSelected
                  ? sidebarMenuItem.iconClosed
                  : sidebarMenuItem.iconOpened}
              </SubMenuIcon>
            </SubMenuIconWrapper>
          ) : null}
        </SidebarItem>
        {subMenus}
      </SidebarContainer>
    );
  });

  // SIDEBAR COMPONENT

  return <SidebarWrapper isOpen={isOpen}>{sidebarMenuItems}</SidebarWrapper>;

  // const [selected, setSelected] = useState(null);
  // const handleMenuItemClick = (name) => {
  //   setSelected(name);
  // };
  // const sidebarMenuItems = links.map((item, index) => {
  //   const isItemSelected = selected === item.name;
  //   const hasSubmenus = item.submenu.length;
  //   const subMenus = item.submenu.map((subMenu, subMenuIndex) => {
  //     return <SubMenuItem key={subMenuIndex}>{subMenu.name}</SubMenuItem>;
  //   });
  //   return (
  //     <SidebarItem
  //       key={index}
  //       selected={isItemSelected}
  //       onClick={hasSubmenus ? () => handleMenuItemClick(item.name) : toggle}
  //     >
  //       <SidebarLink to={item.path}>{item.name}</SidebarLink>
  //       {hasSubmenus && (
  //         <SidebarIcon>
  //           {!isItemSelected && hasSubmenus ? (
  //             <MdKeyboardArrowDown />
  //           ) : (
  //             <MdKeyboardArrowUp />
  //           )}
  //         </SidebarIcon>
  //       )}
  //       <SubmenuItemContainer selected={isItemSelected}>
  //         {subMenus}
  //       </SubmenuItemContainer>
  //     </SidebarItem>
  //   );
  // });
  // return (
  //   <SidebarContainer isOpen={isOpen}>{sidebarMenuItems}</SidebarContainer>
  // );
};

export default Sidebar;

//  const sidebarMenuItems = links.map((item, index) => {
//    return (
//      <SidebarItem key={index} onClick={toggle}>
//        <SidebarLink to={item.path}>{item.name}</SidebarLink>
//      </SidebarItem>
//    );
//  });
