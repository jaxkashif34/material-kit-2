import colors from '../../base/colors';
import typography from '../../base/typography';
import boxShadows from '../../base/boxShadows';
import { pxToRem } from '../../functions';
const { transparent, light, info, secondary } = colors();

const { size } = typography;

const { buttonBoxShadow } = boxShadows();

export default {
  base: {
    minHeight: pxToRem(40),
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(10)} ${pxToRem(20)}`,

    '&:hover': {
      backgroundColor: transparent.main,
      opacity: 0.75,
    },

    '&:focus:not(:hover)': {
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(34),
    padding: `${pxToRem(8)} ${pxToRem(32)}`,
    fontSize: size.xs,

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(49),
    padding: `${pxToRem(14)} ${pxToRem(64)}`,
    fontSize: size.sm,

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: info.main,

    '&:hover': {
      backgroundColor: transparent.main,
    },

    '&:focus:not(:hover)': {
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    '&:hover': {
      backgroundColor: transparent.main,
    },

    '&:focus:not(:hover)': {
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },
};
