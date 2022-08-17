import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow } = ownerState;
  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;

  const greyColors = Object.keys(grey)
    .filter((item) => item.length > 2 && item.length < 4)
    .map((item) => `grey-${item}`);

  const validGradients = Object.keys(gradients);

  const validColors = ['transparent', 'white', 'black', 'text', ...Object.keys(greyColors), ...validGradients];

  const validBorderRadius = Object.keys(radius);

  const validBoxShadows = Object.keys(boxShadows).filter((item) => item.length < 6);

  let backgroundValue = bgColor;

  if (variant === 'gradient') {
    backgroundValue = validGradients.find((el) => el === bgColor) ? linearGradient(gradients[bgColor].main, gradients[bgColor].state) : white.main;
  } else if (validColors.find((el) => el === bgColor)) {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  } else {
    backgroundValue = bgColor;
  }

  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    colorValue = palette[color] ? palette[color].main : greyColors[color];
  }

  // borderRadius
  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius];
  }

  let boxShadowValue = boxShadows;

  if (validBoxShadows.find((el) => el === shadow)) {
    boxShadowValue = boxShadows[shadow];
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
