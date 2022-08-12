import React from 'react';
import ThemeConfig from './assets/theme';
import { Typography, Button, Tooltip, Collapse, Grow, Fade } from '@mui/material';

export default function App() {
  return (
    <ThemeConfig>
      <Typography variant="h1">App commponent testing git push and pull request</Typography>

      <Tooltip title="Add" TransitionComponent={Grow}>
        <Button variant="contained">Click me</Button>
      </Tooltip>
    </ThemeConfig>
  );
}
