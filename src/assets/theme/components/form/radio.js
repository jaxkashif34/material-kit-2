// import borders colors
import borders from '../../base/borders';
import colors from '../../base/colors';

// import pxToRem and linearGradient
import { pxToRem, linearGradient } from '../../functions';

// destructure the borderWidth and borderColor
const { borderWidth, borderColor } = borders;

// destructure the transparent and info from colors
const { transparent, info } = colors();

export default {
  styleOverrides: {
    root: {
      '& .MuiSvgIcon-root': {
        width: pxToRem(20),
        height: pxToRem(20),
        color: transparent.main,
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: '50%',
      },
      '&:after': {
        transition: 'opacity 250ms ease-in-out',
        content: '""',
        position: 'absolute',
        width: pxToRem(14),
        height: pxToRem(14),
        borderRadius: '50%',
        backgroundImage: linearGradient(info.main, info.main),
        opacity: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
      },

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '&.Mui-focusVisible': {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      '&.Mui-checked': {
        color: info.main,

        '& .MuiSvgIcon-root': {
          borderColor: info.main,
        },

        '&:after': {
          opacity: 1,
        },
      },
    },
    colorSecondary: {
      color: borderColor,

      '&.Mui-checked': {
        color: info.main,

        '& .MuiSvgIcon-root': {
          borderColor: info.main,
        },

        '&:after': {
          opacity: 1,
        },
      },
    },
  },
};
