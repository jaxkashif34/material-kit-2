import React from 'react';
import RootTypoGraphy from './root';
import { useConfig } from 'context';
import PropTypes from 'prop-types';
const ArgonTypoGraphy = ({ color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest }) => {
  const { controller } = useConfig();
  const { darkMode } = controller;
  return (
    <RootTypoGraphy {...rest} ownerState={{ color, fontWeight, textTransform, verticalAlign, textGradient, opacity, darkMode }}>
      {children}
    </RootTypoGraphy>
  );
};
// Setting default values for the props of ArgonTypography
ArgonTypoGraphy.defaultProps = {
  color: 'dark',
  fontWeight: false,
  textTransform: 'none',
  verticalAlign: 'unset',
  textGradient: false,
  opacity: 1,
};

// Typechecking props for the ArgonTypography

ArgonTypoGraphy.propTypes = {
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'light', 'dark', 'text', 'white']),
  fontWeight: PropTypes.oneOf([false, 'light', 'regular', 'medium', 'bold']),
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),
  verticalAlign: PropTypes.oneOf(['unset', 'baseline', 'sub', 'super', 'text-top', 'text-bottom', 'middle', 'top', 'bottom']),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
};

export default ArgonTypoGraphy;
