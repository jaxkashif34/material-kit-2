import typography from '../../base/typography';
import borders from '../../base/borders';
import colors from '../../base/colors';

import { pxToRem } from '../../functions';

const { white, dark } = colors();
const { borderRadius } = borders();
const { size, fontWeightRegular } = typography;

const tab = (isDark) => ({
  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: '1 1 auto',
      textAlign: 'center',
      maxWidth: 'unset !important',
      minWidth: 'unset !important',
      minHeight: 'unset !important',
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: 'none',
      lineHeight: 'inherit',
      padding: pxToRem(4),
      borderRadius: borderRadius.md,
      color: `${isDark ? white.main : dark.main} !important`,
      opacity: '1 !important',

      '& .material-icons, .material-icons-round': {
        marginBottom: '0 !important',
        marginRight: pxToRem(4),
      },

      '& svg': {
        marginBottom: '0 !important',
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
});

export default tab;
