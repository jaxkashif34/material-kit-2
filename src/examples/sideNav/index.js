import React from 'react';
import SideNavRoot from './root';
import { useConfig, setMiniSideNav } from 'context';
import ArgonBox from 'components/ArgonBox';
import ArgonTypoGraphy from 'components/ArgonTypography';
import { Divider, Icon, List } from '@mui/material';
import { NavLink } from 'react-router-dom';
import sidenavLogoLabel from './style/sideNav';
// images
import brand from 'assets/images/logo-ct.png';
import brandDark from 'assets/images/logo-ct-dark.png';
import Routes from './routes';
const SideNav = ({ ...rest }) => {
  const {
    dispatch,
    controller: { layout, darkSideNav, isMiniSideNavOpen, darkMode },
  } = useConfig();

  return (
    <SideNavRoot {...rest} variant="permanent" ownerState={{ layout, darkSideNav, isMiniSideNavOpen }}>
      <ArgonBox pt={3} pb={1} px={4} textAlign="center">
        <ArgonBox display={{ xs: 'block', xl: 'none' }} position="absolute" top={0} right={0} p={1.625} onClick={() => setMiniSideNav(dispatch, true)} sx={{ cursor: 'pinter' }}>
          <ArgonTypoGraphy variant="h6" color="secondary">
            <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
          </ArgonTypoGraphy>
        </ArgonBox>
        <ArgonBox component={NavLink} to="/" display="flex" alignItems="center">
          <ArgonBox component="img" src={darkSideNav || darkMode ? brand : brandDark} alt="Argon Logo" width="2rem" mr={0.25} />

          <ArgonBox width="100%" sx={(theme) => sidenavLogoLabel(theme, { isMiniSideNavOpen })}>
            <ArgonTypoGraphy component="h6" variant="button" fontWeight="medium" color={darkSideNav || darkMode ? 'white' : 'black'}>
              Argon Dashboard 2 PRO
            </ArgonTypoGraphy>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>

      <Divider light={darkSideNav || darkMode} />
      <List>
        <Routes />
      </List>

      <ArgonBox pt={1} mt="auto" mb={2} mx={2}>
        {/* sidenav footer */}
      </ArgonBox>
    </SideNavRoot>
  );
};

export default SideNav;
