import { createTheme } from "@mui/material/styles";
// THEME
import borders from "./base/borders";
import breakpoints from "./base/breakpoints";
import colors from "./base/colors";
import typography from "./base/typography";
import { hexToRgb, pxToRem, rgba, linearGradient } from "./functions";
import boxShadow from "./functions/boxShadow";
import boxShadows from "./base/boxShadows";
import globals from "./base/globals";
// OVERRIDES
import {
  toolTip,
  svgIcon,
  slider,
  popover,
  link,
  linearProgress,
  iconButton,
  icon,
  flatPicker,
} from "./components";
export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    pxToRem,
    rgba,
    linearGradient,
  },
  components: {
    MuiCssBaseline: {
      // need to research on CssBaselines
      styleOverrides: {
        ...flatPicker,
        ...globals,
      },
    },
    MuiTooltip: { ...toolTip },
    MuiSvgIcon: { ...svgIcon },
    MuiSlider: { ...slider },
    MuiPopover: { ...popover },
    MuiLink: { ...link },
    MuiLinearProgress: { ...linearProgress },
    MuiIconButton: { ...iconButton },
    MuiIcon: { ...icon },
  },
});
