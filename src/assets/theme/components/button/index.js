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
    containedPrimary: contained.primary,
    containedSecondary: contained.secondary,
    // outlied
    outlined: outlined.base,
    outlinedSizeSmall: outlined.small,
    outlinedSizeLarge: outlined.large,
    outlinedPrimary: outlined.primary,
    outlinedSecondary: outlined.secondary,
    // text
    text: text.base,
    textSizeSmall: text.small,
    textSizeLarge: text.large,
    textPrimary: text.primary,
    textSecondary: text.secondary,
  },
};
