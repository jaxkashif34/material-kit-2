import React from 'react';
import RootConfigrator from './rootConfigrator';
import { useConfig } from '../../context';
import ArgonBox from 'components/ArgonBox';
import ArgonTypoGraphy from 'components/ArgonTypography';
import { Icon } from '@mui/material';
import { setDarkMode, toggleConfig } from 'context';
const Configrator = () => {
  const {
    controller: { openConfig, darkMode },
    dispatch,
    setEnabled,
  } = useConfig();
  return (
    <RootConfigrator variant="permanent" ownerState={{ openConfig }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="baseline" pt={3} pb={0.8} px={3}>
        <ArgonBox>
          <ArgonTypoGraphy variant="h5">Argon Configrator</ArgonTypoGraphy>
          <ArgonTypoGraphy variant="body2" color="text">
            See our dashboard options
          </ArgonTypoGraphy>
        </ArgonBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark, white } }) => ({
            fontSize: `${size.main} !important`,
            fontWeight: `${fontWeightBold} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: darkMode ? white.main : dark.main,
            strokeWidth: '2px',
            cursor: 'pointer',
            mt: 2,
          })}
          onClick={() => toggleConfig(dispatch, !openConfig)}>
          close
        </Icon>
      </ArgonBox>
    </RootConfigrator>
  );
};

export default Configrator;
