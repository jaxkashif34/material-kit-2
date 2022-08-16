// import colors borders
import colors from '../base/colors';
import borders from '../base/borders';

// import pxToRem and boxShadow
import { pxToRem } from '../functions';

const { light, black, info } = colors();
const { borderRadius } = borders();

export default {
  styleOverrides: {
    root: {
      width: '100%',

      '& .MuiSlider-active, & .Mui-focusVisible': {
        boxShadow: 'none !important',
      },

      '& .MuiSlider-valueLabel': {
        color: black.main,
      },
    },

    rail: {
      height: pxToRem(4),
      backgroundColor: light.main,
      borderRadius: borderRadius.sm,
    },

    track: {
      backgroundColor: info.main,
      height: pxToRem(6),
      position: 'relative',
      top: pxToRem(2),
      border: 'none',
      borderRadius: borderRadius.lg,
      zIndex: 1,
    },

    thumb: {
      width: pxToRem(15),
      height: pxToRem(15),
      backgroundColor: info.main,
      zIndex: 10,
      boxShadow: 'none',
      border: 0,

      '&:hover': {
        boxShadow: 'none',
      },
    },
  },
};
