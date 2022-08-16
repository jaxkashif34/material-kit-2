import typography from '../../base/typography';
import colors from '../../base/colors';
import borders from '../../base/borders';
import { pxToRem } from '../../functions';

const { size } = typography;
const { text } = colors();
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      pading: pxToRem(16),
      fontSize: size.md,
      color: text.main,
    },

    dividers: {
      borderTop: `${borderWidth[1]} solid ${borderColor}`,
      borderBottom: `${borderWidth[1]} solid ${borderColor}`,
    },
  },
};
