import { styled } from '@mui/material/styles';
import { Drawer } from '@mui/material';

export default styled(Drawer)(({ theme, ownerState }) => {
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { layout, darkSideNav, isMiniSideNavOpen } = ownerState;

  const sideBarWidth = 256;
  const { white, background, transparent } = palette;
  const { xxl } = boxShadows;
  const { pxToRem } = functions;

  let bgColor;

  if ((darkSideNav && layout === 'landing') || (!darkSideNav && layout === 'landing')) {
    bgColor = transparent.main;
  } else if (darkSideNav) {
    bgColor = background.dark;
  } else {
    bgColor = white.main;
  }

  //   styles for the sidenav when minisidenav={false}

  const drawerOpenStyle = () => ({
    transform: 'translateX(0)',
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up('xl')]: {
      backgroundColor: bgColor,
      boxShadow: darkSideNav ? 'none' : xxl,
      marginBottom: darkSideNav ? 0 : 'inherit',
      left: '0',
      width: sideBarWidth,
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidenav when minisidenav={true}

  const drawerCloseStyle = () => ({
    transform: `translateX(${pxToRem(-320)})`,
    transition: transitions.create('transform', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up('xl')]: {
      backgroundColor: bgColor,
      boxShadow: darkSideNav ? 'none' : xxl,
      marginBottom: darkSideNav ? 0 : 'inherit',
      left: '0',
      width: sideBarWidth,
      transform: 'translateX(0)',
      transition: transitions.create(['width', 'background-color'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });
  return {
    '& .MuiDrawer-paper': {
      boxShadow: xxl,
      border: 'none',
      backgroundColor: transparent.main,

      ...(isMiniSideNavOpen ? drawerCloseStyle() : drawerOpenStyle()),
    },
  };
});
