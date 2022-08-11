import chroma from "chroma-js";
const pxToRem = (num, baseNumber = 10) => `${num / baseNumber}rem`; // 16px = 1rem
const linearGradient = (
  color,
  colorState,
  angle = 195 // create a linear gradient between two colorState
) => `linear-gradient(${angle}deg, ${color}, ${colorState})`;
const hexToRgb = (color) => chroma(color).rgb().join(", "); // convert hex color to rgb
const rgba = (color, opacity) => `rgba(${hexToRgb(color)}, ${opacity})`; // create rgba color string
const gradientChartLine = (chart, color, opacity) => {
  //  create gradient chart linearGradient
  const ctx = chart.getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
};

const boxShadow = (offset = [], radius = [], color, opacity, inset = "") => {
  // create box shadow
  const [x, y] = offset;
  const [blur, spread] = radius;
  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
    spread
  )} ${rgba(color, opacity)}`;
};

export {
  boxShadow,
  gradientChartLine,
  hexToRgb,
  pxToRem,
  rgba,
  linearGradient,
};
