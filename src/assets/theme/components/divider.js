// import colors
import colors from '../base/colors';

// import rgba and pxToRem
import { rgba, pxToRem } from '../functions';

const { dark, white, transparent } = colors();

const divider = (isDark) => ({
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(isDark ? white.main : dark.main, 0)}, ${rgba(isDark ? white.main : dark.main, 0.4)}, ${rgba(isDark ? white.main : dark.main, 0)}) !important`,
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
      opacity: 0.25,
    },

    vertical: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(180deg, ${rgba(isDark ? white.main : dark.main, 0)}, ${rgba(isDark ? white.main : dark.main, 0.4)}, ${rgba(isDark ? white.main : dark.main, 0)}) !important`,
      width: pxToRem(1),
      height: '100%',
      margin: `0 ${pxToRem(16)}`,
      borderRight: 'unset',
    },

    light: {
      backgroundColor: transparent.main,
      backgroundImage: `linear-gradient(to right, ${rgba(dark.main, 0)}, ${dark.main}, ${rgba(dark.main, 0)}) !important`,

      '&.MuiDivider-vertical': {
        backgroundImage: `linear-gradient(180deg, ${rgba(dark.main, 0)}, ${dark.main}, ${rgba(dark.main, 0)}) !important`,
      },
    },
  },
});

export default divider;
