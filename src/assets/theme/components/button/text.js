import colors from '../../base/colors';
import typography from '../../base/typography';
import { pxToRem } from '../../functions';
const { transparent, text, info, secondary } = colors();

const { size } = typography;

export default {
  base: {
    minHeight: pxToRem(40),
    backgroundColor: transparent.main,
    color: text.main,
    boxShadow: 'none',
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    '&:hover': {
      backgroundColor: transparent.main,
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: 'none',
    },

    '&:active, &:active:focus, &:active:hover': {
      opacity: 0.85,
      boxShadow: 'none',
    },

    '&:disabled': {
      boxShadow: 'none',
    },

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,
    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    color: info.main,

    '&:hover': {
      color: info.main,
    },

    '&:focus:not(:hover)': {
      color: info.main,
      boxShadow: 'none',
    },
  },

  secondary: {
    color: secondary.main,
    borderColor: secondary.main,

    '&:hover': {
      color: secondary.main,
    },

    '&:focus:not(:hover)': {
      color: secondary.main,
      boxShadow: 'none',
    },
  },
};
