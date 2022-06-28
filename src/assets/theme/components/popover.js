import colors from "../base/colors";
import borders from "../base/borders";
import boxShadows from "../base/boxShadows";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      borderRadius: borderRadius.md,
    },
  },
};
export default popover;
