import colors from '../../base/colors';
import typography from '../../base/typography';
import boxShadows from '../../base/boxShadows';

import { pxToRem } from '../../functions';

const { white, text, info, secondary } = colors();

const { buttonBoxShadow } = boxShadows();

const { size } = typography;

export default {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    boxShadow: buttonBoxShadow.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    '&:hover': {
      backgroundColor: white.main,
      boxShadow: buttonBoxShadow.stateOf,
    },

    '&:focus': {
      boxShadow: buttonBoxShadow.stateOf,
    },
    '&:disabled': {
      boxShadow: buttonBoxShadow.main,
    },

    '&:focus, &:active:hover, &:active:focus': {
      opacity: 0.85,
      boxShadow: buttonBoxShadow.stateOf,
    },

    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(8)} ${pxToRem(32)}`,
    fontSize: size.xs,
    '& .material-icons, .material-icons-round, svg': {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(14)} ${pxToRem(64)}`,
    fontSize: size.sm,

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
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    '&:hover': {
      backgroundColor: secondary.main,
    },

    '&:focus:not(:hover)': {
      backgroundColor: secondary.main,
      boxShadow: buttonBoxShadow.stateOfNotHover,
    },
  },
};
