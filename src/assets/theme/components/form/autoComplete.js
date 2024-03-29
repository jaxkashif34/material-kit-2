import boxShadows from '../../base/boxShadows';
import typography from '../../base/typography';
import borders from '../../base/borders';
import colors from '../../base/colors';
// helper function
import { pxToRem } from '../../functions';

const { lg } = boxShadows();
const { size } = typography;
const { text, white, transparent, light, dark, gradients, background } = colors();
const { borderRadius } = borders();

const autoComplete = (isDark) => ({
  styleOverrides: {
    popper: {
      boxShadows: lg,
      padding: pxToRem(8),
      fontSize: size.sm,
      color: text.main,
      textAlign: 'left',
      backgroundColor: `${isDark ? background.dark : white.main} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: 'none',
      backgroundColor: transparent.main,
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: size.sm,
      color: text.main,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
        backgroundColor: light.main,
        color: dark.main,
      },

      "&[aria-selected='true']": {
        backgroundColor: `${light.main} !important`,
        color: `${dark.main} !important`,
      },
    },
    noOptions: {
      fontSize: size.sm,
      color: text.main,
    },

    groupLabel: {
      color: dark.main,
    },
    loading: {
      fontSize: size.sm,
      color: text.main,
    },
    tag: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      padding: pxToRem(4),
      backgroundColor: gradients.dark.state,
      color: white.main,

      '& .MuiChip-Label': {
        lineHeight: 1.2,
        padding: `${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      '& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus': {
        color: white.main,
        marginRight: 0,
      },
    },
  },
});
export default autoComplete;
