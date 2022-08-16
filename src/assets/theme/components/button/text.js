import colors from '../../base/colors';
import typography from '../../base/typography';
import { pxToRem } from '../../functions';
const { transparent, grey, info, secondary } = colors();

const { size } = typography;

export default {
  base: {
    backgroundColor: transparent.main,
    height: 'max-content',
    color: info.main,
    boxShadow: 'none',
    padding: `${pxToRem(6)} ${pxToRem(12)}`,

    '&:hover': {
      backgroundColor: transparent.main,
      boxShadow: 'none',
      color: info.focus,
    },
    '&:focus': {
      boxShadow: 'none',
      color: info.focus,
    },

    '&:active, &:active:focus, &:active:hover': {
      opacity: 0.85,
      boxShadow: 'none',
    },

    '&:disabled': {
      boxShadow: 'none',
      color: grey[600],
    },

    '& .material-icons, .material-icons-round, svg, span': {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    fontSize: size.xs,
    '& .material-icons, .material-icons-round, svg, span': {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    fontSize: size.sm,

    '& .material-icons, .material-icons-round, svg, span': {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    color: info.main,
    backgroundColor: transparent.main,

    '&:hover': {
      color: info.focus,
      backgroundColor: transparent.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: transparent.main,
      color: info.focus,
      boxShadow: 'none',
    },
  },

  secondary: {
    color: secondary.focus,
    backgroundColor: transparent.main,

    '&:hover': {
      color: secondary.main,
      backgroundColor: transparent.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: transparent.main,
      color: secondary.focus,
      boxShadow: 'none',
    },
  },
};
