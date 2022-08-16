import typography from '../../base/typography';
import borders from '../../base/borders';
import colors from '../../base/colors';

import { pxToRem } from '../../functions';

const { dark } = colors();
const { borderRadius } = borders;
const { size, fontWeightRegular } = typography;

export default {
  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flex: '1 1 auto',
      textAlign: 'center',
      maxWidth: 'unset !important',
      minWidth: 'unset !important',
      minHeight: 'unset !important',
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      textTransform: 'none',
      lineHeight: 'inherit',
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${dark.main} !important`,
      opacity: `1 !important`,

      '& .material-icons, .material-icons-round': {
        marginBottom: '0 !important',
        marginRight: pxToRem(6),
      },

      '& svg': {
        marginBottom: '0 !important',
        marginRight: pxToRem(6),
      },

      '& i.MuiTab-iconWrapper': {
        marginBottom: 0,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};
