import borders from "../base/borders";
import colors from "../base/colors";
import { pxToRem } from "../functions";

const { light } = colors;
const { borderRadius } = borders;

const linearProgress = {
  styleOverrides: {
    root: {
      height: pxToRem(6),
      borderRadius: borderRadius.md,
      overflow: "visible",
      position: "relative",
    },
    colorPrimary: {
      background: light.main,
    },
    colorSecondary: {
      background: light.main,
    },
    bar: {
      height: pxToRem(6),
      borderRadius: borderRadius.sm,
      position: "absolute",
      transform: "translate(0, 0) !important",
      transition: "width 0.6s ease !important",
    },
  },
};
export default linearProgress;
