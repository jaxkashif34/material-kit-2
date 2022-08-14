import React, { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { themeObj } from './theme';
export default function ThemeConfig({ children }) {
  const theme = useMemo(() => themeObj, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
