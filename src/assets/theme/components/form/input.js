// import colors
import colors from '../../base/colors';
// imoprt borders
import borders from '../../base/borders';
import { pxToRem } from '../../functions';

// destructure dark inputBorderColor info from colors
const { inputColors } = colors();
// destructure borderWidth from borders
const { borderWidth, borderRadius } = borders();

export default {
  styleOverrides: {
    root: {
      display: 'flex !important',
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,

      '& fieldset': {
        border: 'none',
      },
    },
  },
};
