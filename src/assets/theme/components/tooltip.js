import { Fade } from "@mui/material";
// import { colors, typography, borders } from "../base/colors";
import colors from "../base/colors";
import typography from "../base/typography";
import borders from "../base/borders";

import { pxToRem } from "../functions";

const { black, light } = colors;
const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;

const toolTip = {
  defaultProps: {
    arrow: true,
    TransitionComponent: Fade,
  },
  styleOverrides: {
    tooltip: {
      maxWidth: pxToRem(200),
      color: light.main,
      backgroundColor: black.main,
      size: size.sm,
      fontWeight: fontWeightRegular,
      textAlign: "center",
      borderRadius: borderRadius.md,
      opacity: 0.7,
      padding: `${pxToRem(5)} ${pxToRem(8)} ${pxToRem(4)}`,
    },
    arrow: {
      color: black.main,
    },
  },
};
export default toolTip;
