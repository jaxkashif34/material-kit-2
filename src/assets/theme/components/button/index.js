import root from './root';
import contained from './contained';
import outlined from './outlined';
import text from './text';
export default {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root,
    // contained
    contained: contained.base,
    containedSizeSmall: contained.small,
    containedSizeLarge: contained.large,
    containedSizePrimary: contained.primary,
    containedSizeSecondary: contained.secondary,
    // outlied
    outlined: outlined.base,
    outlinedSizeSmall: outlined.small,
    outlinedSizeLarge: outlined.large,
    outlinedSizePrimary: outlined.primary,
    outlinedSizeSecondary: outlined.secondary,
    // text
    text: text.base,
    textSizeSmall: text.small,
    textSizeLarge: text.large,
    textSizePrimary: text.primary,
    textSizeSecondary: text.secondary,
    textSizeSmall: text.small,
  },
};
