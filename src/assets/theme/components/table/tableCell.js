// import borders and colors
import borders from '../../base/borders';
import colors from '../../base/colors';

// import pxToRem
import { pxToRem } from '../../functions';

const { borderWidth } = borders();
const { light } = colors();

export default {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};
