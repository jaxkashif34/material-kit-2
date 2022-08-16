// import colors
import colors from '../../base/colors';
// destructure text from colors
const { dark } = colors();

export default {
  styleOverrides: {
    root: {
      color: dark.main,
    },
  },
};
