import colors from '../base/colors';
import borders from '../base/borders';

// Argon Dashboard 2 MUI helper functions
import { pxToRem } from '../functions';

const { background, white } = colors();
const { borderRadius } = borders();

const sideNav = (isDark) => ({
  styleOverrides: {
    root: {
      width: pxToRem(256),
      whiteSpace: 'nowrap',
      border: 'none',
    },

    paper: {
      width: pxToRem(256),
      backgroundColor: isDark ? background.dark : white.main,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: `${pxToRem(16)} 0 ${pxToRem(16)} ${pxToRem(16)}`,
      borderRadius: borderRadius.xl,
      border: 'none',
    },

    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
});
export default sideNav;
