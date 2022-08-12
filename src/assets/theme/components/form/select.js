// imoprt colors
import colors from '../../base/colors';

// import pxToRem
import { pxToRem } from '../../functions';

// destructure transparent
const { transparent } = colors;

export default {
  styleOverrides: {
    select: {
      desplay: 'grid',
      alignItems: 'center',
      padding: `0 ${pxToRem(12)} !important`,

      '& .Mui-selected': {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: 'none',
      height: 'none',
      minHeight: 'none',
      overflow: 'unset',
    },

    icon: {
      display: 'none',
    },
  },
};
