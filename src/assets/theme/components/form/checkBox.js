import borders from '../../base/borders';
import colors from '../../base/colors';

import { pxToRem, linearGradient } from '../../functions';

const { borderWidth, borderColor } = borders();
const { info, transparent, gradients } = colors();

export default {
  styleOverrides: {
    root: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: pxToRem(20),
      height: pxToRem(20),
      marginRight: pxToRem(6),
      padding: 0,
      color: transparent.main,
      border: `${borderWidth[1]} solid ${borderColor}`,
      borderRadius: pxToRem(5.6),
      transition: 'all 250ms ease',

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '& .MuiSvgIcon-root': {
        fill: transparent.main,
      },

      '&.Mui-focusVisible': {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: transparent.main,

      '&.Mui-checked': {
        color: info.main,
        '& .MuiSvgIcon-root': {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            gradients.info.main,
            gradients.info.state
          )}`,

          borderColor: gradients.info.main,
        },

        '&:hover': {
          backgroundColor: transparent.main,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      '& .MuiSvgIcon-root': {
        color: info.main,
        '&.Mui-checked': {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
            gradients.info.main,
            gradients.info.state
          )}`,
          borderColor: gradients.info.state,
        },
        '&:hover': {
          backgroundColor: transparent.main,
        },
      },
    },
  },
};
