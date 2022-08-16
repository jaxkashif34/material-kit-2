import colors from '../../base/colors';
import typography from '../../base/typography';

import { pxToRem } from '../../functions';

const { white, text, info, secondary } = colors();

const { size } = typography;

export default {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    '&:hover': {
      backgroundColor: white.main,
    },

    '&:focus, &:active:hover, &:active:focus': {
      opacity: 0.85,
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
    fontSize: size.xs,

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: info.main,

    '&:hover': {
      backgroundColor: info.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: info.main,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    '&:hover': {
      backgroundColor: secondary.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: secondary.main,
    },
  },
};
