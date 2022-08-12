// import colors
import colors from '../../base/colors';
// import typography
import typography from '../../base/typography';
// imoprt borders
import borders from '../../base/borders';

// destructure dark inputBorderColor info from colors
const { dark, inputBorderColor, info } = colors;
// destructure size from typography
const { size } = typography;
// destructure borderWidth from borders
const { borderWidth } = borders;

export default {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },
      '&:before': {
        borderColor: inputBorderColor,
      },

      '&:after': {
        borderColor: info.main,
      },
    },
  },
};
