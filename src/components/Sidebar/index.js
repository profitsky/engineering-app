import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
      selected(null);
    } else if (
      (current && !previous) ||
      name === previous ||
      (name && !current)
    ) {
      setSelected(name);
    }
  };

  useEffect(() => {
    setSelected(null);
  }, [isOpen]);

  //JSX COMPONENTS
  const sidebarMenuItems = links.map((sidebarMenuItem, sibarMenuIndex) => {
    const isItemSelected = selected === sidebarMenuItem.name;
    const hasSubmenu = sidebarMenuItem.submenu.length;

    const subMenus = sidebarMenuItem.submenu.map((subMenu, subMenuIndex) => {
      return (
        <SubmenuItemContainer key={subMenuIndex}>
          <SubMenuItemIcon>{subMenu.icon}</SubMenuItemIcon>
          <SubMenuItem to={subMenu.path} onClick={toggle}>
            {subMenu.name}
          </SubMenuItem>
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
          {!hasSubmenu ? (
            <SidebarLink to={sidebarMenuItem.path}>
              {sidebarMenuItem.name}
            </SidebarLink>
          ) : (
            <SidebarLink to='/'>{sidebarMenuItem.name}</SidebarLink>
          )}

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
        {isItemSelected && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {subMenus}
          </motion.div>
        )}
      </SidebarContainer>
    );
  });

  // SIDEBAR COMPONENT

  return (
    <AnimatePresence>
      {isOpen && (
        <SidebarWrapper
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          {sidebarMenuItems}
        </SidebarWrapper>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
