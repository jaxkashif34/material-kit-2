import React from 'react';
import PropTypes from 'prop-types';
import ArgonButtonRoot from './root';
const ArgonButton = ({ color, variant, size, circular, iconOnly, children, ...rest }) => {
  return (
    <ArgonButtonRoot {...rest} color="primary" variant={variant === 'gradient' ? 'contained' : variant} size={size} ownerState={{ color, variant, size, circular, iconOnly }}>
      {children}
    </ArgonButtonRoot>
  );
};
//  setting the default props for the ArgonButton
ArgonButton.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'white',
  circular: false,
  iconOnly: false,
};

// TypeChecking props for the ArgonButton
ArgonButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'text', 'contained', 'gradient']),
  color: PropTypes.oneOf(['white', 'primary', 'secondary', 'info', 'warning', 'success', 'error', 'light', 'dark']),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ArgonButton;
