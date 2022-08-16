import { pxToRem } from '../functions';

import colors from '../base/colors';
import borders from '../base/borders';

const { grey, light } = colors();
const { borderRadius } = borders();

const linearProgress = (isDark) => ({
  styleOverrides: {
    root: {
      height: pxToRem(3),
      borderRadius: borderRadius.md,
      overflow: 'visible',
      position: 'relative',
    },

    colorPrimary: {
      backgroundColor: isDark ? grey[400] : light.main,
    },

    colorSecondary: {
      backgroundColor: isDark ? grey[400] : light.main,
    },

    bar: {
      height: '100%',
      borderRadius: borderRadius.sm,
      position: 'absolute',
      transform: `translate(0, 0) !important`,
      transition: 'width 0.6s ease !important',
    },
  },
});
export default linearProgress;
