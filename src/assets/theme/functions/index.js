import chroma from "chroma-js";

export const hexToRgb = (color) => chroma(color).rgb().join(", ");
export const rgba = (color, opacity) => `rgba(${hexToRgb(color)}, ${opacity})`;
export const pxToRem = (number, baseNumber = 10) => `${number / baseNumber}rem`;
export const linearGradient = (color, colorState, angle = 195) =>
  `linear-gradient(${angle}deg, ${color}, ${colorState})`;

