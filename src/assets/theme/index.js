import React, { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { themeObj } from './theme';
export default function ThemeConfig({ children }) {
  const theme = useMemo(() => themeObj, []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
