import React from 'react';
import ThemeConfig from './assets/theme';
import { Typography, Button } from '@mui/material';

export default function App() {
  return (
    <ThemeConfig>
      <Typography variant="h1">App commponent</Typography>
      <Button variant="contained">Click me</Button>
    </ThemeConfig>
  );
}
