import borders from '../../base/borders';
import colors from '../../base/colors';

const { white } = colors;
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      color: '#9ffc9ff',
      transition: 'all 200ms linear',

      '&.Mui-active': {
        color: white.main,
      },

      '&.Mui-completed': {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: '14%',
      left: '-50%',
      right: '50%',
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColo: 'currentColor',
      opacity: 0.5,
    },
  },
};
