// import colors
import colors from '../../base/colors';
// destructure text from colors
const { text } = colors;

export default {
  styleOverrides: {
    root: {
      color: text.main,
    },
  },
};
