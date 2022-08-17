import React from 'react';
import ArgonBox from 'components/ArgonBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { toggleConfig, useConfig } from '../../context';
import Configrator from '../../examples/configrators';
import { Icon } from '@mui/material';
export default function SideNavConfigrator() {
  const { controller, dispatch } = useConfig();
  const { openConfig } = controller;
  const handleConfig = () => {
    toggleConfig(dispatch, !openConfig);
  };

  return (
    <>
      <h4>Side Nav</h4>
      <Configrator />
      <ArgonBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3.5rem"
        height="3.5rem"
        bgColor="white"
        shadow="sm"
        borderRadius="50%"
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={99}
        color="dark"
        sx={{ cursor: 'pointer' }}
        onClick={handleConfig}>
        <Icon fontSize="default" color="inherit">
          settings
        </Icon>
      </ArgonBox>
    </>
  );
}
