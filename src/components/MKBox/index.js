import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MKBoxRoot from './MKBoxRoot';
const MKBox = forwardRef(({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
  <MKBoxRoot
    {...rest}
    ref={ref}
    ownerState={{
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      coloredShadow,
    }}
  />
));

// setting the default props for the component

MKBox.defaultProps = {
  varient: 'contained',
  bgColor: 'transparent',
  color: 'dark',
  opacity: 1,
  borderRadius: 'none',
  shadow: 'none',
  coloredShadow: '  none',
};

// typing checking for props

MKBox.propTypes = {
  varient: PropTypes.oneOf(['contained', 'gradient']),
  coloredShadow: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'error', 'light', 'dark']),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  opacity: PropTypes.number,
};

export default MKBox;
