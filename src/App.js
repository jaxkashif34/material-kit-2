import React from 'react';
import { Typography, Paper } from '@mui/material';
import { setDarkMode, useConfig } from './context';
import { useTheme } from '@mui/material';

export default function App() {
  const { controller, dispatch, setEnabled } = useConfig();
  const { darkMode } = controller;

  const theme = useTheme();
  return (
    <Paper style={{ backgroundColor: theme.palette.background.default }}>
      <Typography
        variant="body1"
        onClick={() => {
          const value = {
            setEnabled,
            mode: !darkMode,
          };
          setDarkMode(dispatch, value);
        }}>
        App commponent
      </Typography>
    </Paper>
  );
}
