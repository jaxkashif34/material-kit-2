import { pxToRem } from "../functions";
const svgIcon = {
  defaultProps: {
    fontSize: "inherit",
  },
  styleOverrides: {
    fontSizeInherit: {
      fontSizeInherit: "inherit !important",
    },
    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },
    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};
export default svgIcon;
