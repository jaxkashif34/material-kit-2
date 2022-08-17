import React from 'react';
import PropTypes from 'prop-types';
import ArgonBoxRoot from './ArgonBoxRoot';
const ArgonBox = ({ variant, bgColor, color, opacity, borderRadius, shadow, ...rest }) => {
  return <ArgonBoxRoot {...rest} ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }} />;
};

// Setting default values for the props of ArgonBox
ArgonBox.defaultProps = {
  variant: 'contained',
  bgColor: 'transparent',
  color: 'dark',
  opacity: 1,
  borderRadius: 'none',
  shadow: 'none',
};

// Typechecking props for the ArgonBox
ArgonBox.propTypes = {
  variant: PropTypes.oneOf(['contained', 'gradient']),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
};

export default ArgonBox;
