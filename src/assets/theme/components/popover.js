import colors from '../base/colors';
import borders from '../base/borders';
import boxShadows from '../base/boxShadows';

import { pxToRem } from '../functions';

const { transparent } = colors();
const { borderRadius } = borders();
const { lg } = boxShadows();

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.lg,
    },
  },
};
