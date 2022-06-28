import React from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from "@mui/material/Icon";
import theme from "assets/theme";
import {
  Button,
  Tooltip,
  LinearProgress,
  IconButton,
  Icon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Icon fontSize="small">
        <DeleteIcon />
      </Icon>
    </ThemeProvider>
  );
}
