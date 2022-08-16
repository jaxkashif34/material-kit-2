import typography from '../../base/typography';
import colors from '../../base/colors';

import { pxToRem, rgba } from '../../functions';

const { white } = colors();
const { size, fontWeightRegular } = typography;

export default {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: '#9fc9ff',
      textTransform: 'uppercase',

      '&.Mui-active': {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      '&.Mui-completed': {
        fontWeight: `${fontWeightRegular} !important}`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};
