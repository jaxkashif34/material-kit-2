// import borders colors
import borders from '../../base/borders';
import colors from '../../base/colors';

// import pxToRem and linearGradient
import { pxToRem, linearGradient } from '../../functions';

// destructure the borderWidth and borderColor
const { borderWidth, borderColor } = borders();

// destructure the transparent and info from colors
const { transparent, info, gradients } = colors();

export default {
  styleOverrides: {
    root: {
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      width: pxToRem(20),
      height: pxToRem(20),
      marginRight: pxToRem(6),
      padding: 0,
      color: transparent.main,
      border: `${borderWidth[1]} solid ${borderColor}`,
      borderRadius: "50%",
      transition: "all 250ms ease",

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "& .MuiSvgIcon-root": {
        fill: transparent.main,
      },

      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      backgroundColor: transparent.main,

      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' width='15px'%3E%3Ccircle cx='50%' cy='50%' r='3' fill='%23fff' /%3E%3C/svg%3E"), ${linearGradient(
          gradients.info.main,
          gradients.info.state
        )}`,
        borderColor: gradients.info.state,
      },

      "&:hover": {
        backgroundColor: transparent.main,
      },
    },

    colorSecondary: {
      backgroundColor: transparent.main,

      "&.Mui-checked": {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='15px' width='15px'%3E%3Ccircle cx='50%' cy='50%' r='3' fill='%23fff' /%3E%3C/svg%3E"), ${linearGradient(
          gradients.info.main,
          gradients.info.state
        )}`,
        borderColor: gradients.info.state,
      },

      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};
