import borders from '../../base/borders';
import colors from '../../base/colors';
import boxShadows from '../../base/boxShadows';

import { pxToRem } from '../../functions';

const { background, grey, white } = colors();
const { borderRadius } = borders();
const { tabsBoxShadow } = boxShadows();

const tabs = (isDark) => ({
  styleOverrides: {
    root: {
      position: 'relative',
      backgroundColor: isDark ? background.default : grey[100],
      borderRadius: borderRadius.lg,
      minHeight: 'unset',
      padding: pxToRem(4),
    },

    flexContainer: {
      height: '100%',
      position: 'relative',
      zIndex: 10,
    },

    fixed: {
      overflow: 'unset !important',
      overflowX: 'unset !important',
    },

    vertical: {
      '& .MuiTabs-indicator': {
        width: '100%',
      },
    },

    indicator: {
      height: '100%',
      borderRadius: borderRadius.md,
      backgroundColor: isDark ? background.dark : white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: 'all 500ms ease',
    },
  },
});

export default tabs;
