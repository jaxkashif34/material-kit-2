// import colors and boxShadows
import colors from '../../base/colors';
import boxShadows from '../../base/boxShadows';
import borders from '../../base/borders';

const { background, white } = colors();
const { cardBoxShadow } = boxShadows();
const { borderRadius } = borders();

const tableContainer = (isDark) => ({
  styleOverrides: {
    root: {
      backgroundColor: isDark ? background.dark : white.main,
      boxShadow: cardBoxShadow,
      borderRadius: borderRadius.xl,
    },
  },
});

export default tableContainer;
