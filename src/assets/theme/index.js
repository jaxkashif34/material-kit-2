import React, { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { themeObj } from './theme';
import { useConfig } from '../../context';
export default function ThemeConfig({ children }) {
  const { controller } = useConfig();
  const { darkMode, direction } = controller;
  const theme = useMemo(() => themeObj(darkMode, direction), [darkMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
