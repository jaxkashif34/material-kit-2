import colors from '../../base/colors';
import typography from '../../base/typography';
import boxShadows from '../../base/boxShadows';
import borders from '../../base/borders';
import { pxToRem } from '../../functions';

const { text, white } = colors();
const { size } = typography;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: 'left',
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },
  },
};
