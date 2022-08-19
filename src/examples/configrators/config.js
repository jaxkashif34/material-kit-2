import React from 'react';
import ArgonBox from 'components/ArgonBox';
import ArgonTypoGraphy from 'components/ArgonTypography';
import { Switch, Divider } from '@mui/material';
import PropTypes from 'prop-types';
const Config = ({ data, divider = true }) => {
  const { onChange, checkedValue, mt, text } = data;
  return (
    <>
      <ArgonBox display="flex" justifyContent="space-between" mt={mt} lineHeight={1}>
        <ArgonTypoGraphy variant="h6">{text}</ArgonTypoGraphy>

        <Switch checked={checkedValue} onChange={onChange} />
      </ArgonBox>
      {divider && <Divider />}
    </>
  );
};

// Typechecking props for Config

Config.propTypes = {
  data: PropTypes.shape({
    mt: PropTypes.number,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkedValue: PropTypes.bool.isRequired,
  }),
  divider: PropTypes.bool,
};

export default Config;
