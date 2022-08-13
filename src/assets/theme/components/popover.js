import colors from '../base/colors';
import borders from '../base/borders';
import boxShadows from '../base/boxShadows';

const { transparent } = colors;
const { borderRadius } = borders;
const { lg } = boxShadows;

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadows: lg,
      borderRadius: borderRadius.md,
    },
  },
};
