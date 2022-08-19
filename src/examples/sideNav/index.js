import React from 'react';
import SideNavRoot from './root';
import { useConfig } from 'context';
const SideNav = ({ ...rest }) => {
  const {
    controller: { layout, darkSideNav, isMiniSideNavOpen },
  } = useConfig();

  return (
    <SideNavRoot {...rest} variant="permanent" ownerState={{ layout, darkSideNav, isMiniSideNavOpen }}>
      {/* kashif */}
    </SideNavRoot>
  );
};

export default SideNav;
