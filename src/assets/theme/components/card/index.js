import { rgba } from '../../functions';
import colors from '../../base/colors';
import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';

const { black, background, white } = colors();
const { borderWidth, borderRadius } = borders();
const { cardBoxShadow } = boxShadows();

const card = (isDark) => ({
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: isDark ? background.dark : white.main,
      backgroundClip: 'border-box',
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: cardBoxShadow,
      overflow: 'visible',
    },
  },
});

export default card;
