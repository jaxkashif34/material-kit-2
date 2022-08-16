// import colors and boxShadows
import colors from '../../base/colors';
import boxShadows from '../../base/boxShadows';
import borders from '../../base/borders';

const { white } = colors();
const { md } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadows: md,
      borderRadius: borderRadius.xl,
    },
  },
};
